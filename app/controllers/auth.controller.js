import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userDatamapper from '../datamappers/user.datamapper.js';
import tokenDatamapper from '../datamappers/token.datamapper.js';
import ApiError from '../errors/api.error.js';
import userController from './user.controller.js';

export default class AuthController {
  static datamapper = userDatamapper;

  static async getSignout(req, res, next) {
    // Extract the token from the authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    // Remove the token from the database
    const tokenRemoved = await tokenDatamapper.deleteByToken(token);

    // Check if the token was successfully removed
    if (!tokenRemoved) {
      // If not, create an error indicating an internal server error
      const err = new ApiError(
        'Une erreur est survenue lors de la déconnexion. Veuillez réssayer.',
        { httpStatus: 500 }, // Use HTTP status 500 for internal server error
      );
      return next(err);
    }

    // If successful, send a success response
    return res.status(200).json('Déconnexion réussie');
  }

  static async postSignin(req, res, next) {
    const { email, password } = req.body;

    // Check if a user with the provided email exists in the database
    const existingUser = await userDatamapper.findByEmail(email);

    if (!existingUser) {
      const err = new ApiError(
        'L\'utilisateur est introuvable',
        { httpStatus: 404 },
      );
      return next(err);
    }

    // Compare the provided password with the hashed password stored in the database
    const isValidPassword = await bcrypt.compare(password, existingUser.password);

    if (!isValidPassword) {
      const err = new ApiError(
        'Mot de passe ou email incorrect.',
        { httpStatus: 401 },
      );
      return next(err);
    }

    // Generate a JWT token with user information and expiration time
    const token = jwt.sign({
      userId: existingUser.id,
      email: existingUser.email,
      firstname: existingUser.firstname,
      lastname: existingUser.lastname,
      role: existingUser.role,
    }, process.env.JWT_SECRET, { expiresIn: '1w' });

    // Calculate the expiration date for the token (1 week from now)
    const expiresIn = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    // Prepare data to insert into the token table
    const data = {
      user_id: existingUser.id,
      key: token,
      expires_at: expiresIn,
    };

    // Insert the token data into the token table
    const tokenCreated = await tokenDatamapper.insert(data);

    // If an error occurs during token creation, return a 400 error
    if (!tokenCreated) {
      const err = new ApiError(
        'Erreur lors de la création du token.',
        { httpStatus: 400 },
      );
      return next(err);
    }

    return res.status(200).json({ token });
  }

  static async postSignup(req, res, next) {
    const { password, ...bodyWithoutPassword } = req.body;
    // Check if a user with the provided email already exists
    const existingUser = await userDatamapper.findByEmail(bodyWithoutPassword.email);

    // If a user with the provided email already exists, return a 409 conflict error
    if (existingUser) {
      const err = new ApiError(
        'Email déjà utilisé.',
        { httpStatus: 409 },
      );
      return next(err);
    }

    // Hash the provided password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Prepare user data with hashed password
    const userData = {
      ...bodyWithoutPassword,
      password: hashedPassword,
    };
    // Call the user controller's create method to create the user
    const userCreated = await userDatamapper.insert(userData);
    // If an error occurs during user creation, return a 400 error
    if (!userCreated) {
      const err = new ApiError(
        'Erreur lors de la création du compte.',
        { httpStatus: 400 },
      );
      return next(err);
    }
    return res.status(201).json({ user: userCreated });
  }
}
