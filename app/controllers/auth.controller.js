import userDatamapper from '../datamappers/user.datamapper.js';

export default class AuthController {
  static datamapper = userDatamapper;

  static async getSignout(_, res) {
    res.status(200).statusMessage('Déconnexion réussie');
  }

  static async postSignin(req, res) {
    res.status(200).statusMessage('Connexion réussie');
  }

  static async postSignup(req, res) {
    res.status(200).statusMessage('Inscription réussie');
  }
}
