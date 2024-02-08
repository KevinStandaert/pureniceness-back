import bcrypt from 'bcrypt';
import userDatamapper from '../datamappers/user.datamapper.js';
import ApiError from '../errors/api.error.js';
import userController from './user.controller.js';

export default class AuthController {
  static datamapper = userDatamapper;

  static async getSignout(req, res) {
    return res.status(200).json('Déconnexion réussie');
  }

  static async postSignin(req, res, next) {
    const { email, password } = req.body;
    const existingUser = await userDatamapper.findByEmail(email);

    if (!existingUser) {
      const err = new ApiError(
        'Mot de passe ou email incorrect.',
        { httpStatus: 401 },
      );
      return next(err);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const isValidPassword = bcrypt.compare(hashedPassword, existingUser.password);

    if (!isValidPassword) {
      const err = new ApiError(
        'Mot de passe ou email incorrect.',
        { httpStatus: 401 },
      );
      return next(err);
    }

    return res.status(200).json('Connexion réussie');
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
    console.log(userCreated);
    if (!userCreated) {
      const err = new ApiError(
        'Erreur lors de la création du compte.',
        { httpStatus: 400 },
      );
      return next(err);
    }

    return res.status(201).json('Inscription réussie');
  }
}
