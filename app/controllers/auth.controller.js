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
    const existingUser = await userDatamapper.findByEmail(email);

    if (!existingUser) {
      const err = new ApiError(
        'L\'utilisateur est introuvable',
        { httpStatus: 404 },
      );
      return next(err);
    }

    const isValidPassword = await bcrypt.compare(password, existingUser.password);

    if (!isValidPassword) {
      const err = new ApiError(
        'Mot de passe ou email incorrect.',
        { httpStatus: 401 },
      );
      return next(err);
    }

    const token = jwt.sign({
      userId: existingUser.id,
      email: existingUser.email,
      firstname: existingUser.firstname,
      lastname: existingUser.lastname,
      role: existingUser.role,
    }, process.env.JWT_SECRET, { expiresIn: '1w' });

    const expiresIn = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    const data = {
      user_id: existingUser.id,
      key: token,
      expires_at: expiresIn,
    };

    const tokenCreated = await tokenDatamapper.insert(data);

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

    const existingUser = await userDatamapper.findByEmail(bodyWithoutPassword.email);

    if (existingUser) {
      const err = new ApiError(
        'Email déjà utilisé.',
        { httpStatus: 409 },
      );
      return next(err);
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {
      body: {
        ...bodyWithoutPassword,
        password: hashedPassword,
      },
    };

    const userCreated = await userController.create(userData);
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
