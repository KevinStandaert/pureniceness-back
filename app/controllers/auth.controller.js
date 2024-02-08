import userDatamapper from '../datamappers/user.datamapper.js';

export default class AuthController {
  static datamapper = userDatamapper;

  static async getSignout(_, res) {
    console.log('Deconnexion');
    res.status(200).json('Déconnexion réussie');
  }

  static async postSignin(req, res) {
    res.status(200).json('Connexion réussie');
  }

  static async postSignup(req, res) {
    res.status(200).json('Inscription réussie');
  }
}
