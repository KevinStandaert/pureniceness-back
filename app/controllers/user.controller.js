import UserDatamapper from '../datamappers/user.datamapper.js';
import CoreController from './core.controller.js';
import ApiError from '../errors/api.error.js';
import parseIntAndCompare from '../utils/parseint.compare.js';

export default class UserController extends CoreController {
  static datamapper = UserDatamapper;

  static async update({ params, body, user }, res, next) {
    const { id } = params;
    const { userId } = user;
    const { role: userRole } = user;
    // récupérer le role de l'utilisateur
    // si le role est admin, on peut modifier n'importe quel utilisateur
    if (userRole === 'admin') {
      const dbData = await this.datamapper.findByPk(id);
      if (!dbData) {
        return next();
      }
      const data = { ...dbData, ...body };
      const row = await this.datamapper.update(data);
      if (!row) {
        return next();
      }
      return res.status(200).json(row);
    }
    // si le role est user, on peut modifier uniquement son propre profil
    // parsing and comparing the id and userId
    const isEqual = parseIntAndCompare(id, userId);
    if (!isEqual) {
      const err = new ApiError(
        'Vous n\'avez pas les droits pour accéder à ces informations',
        { httpStatus: 403 },
      );
      return next(err);
    }
    const dbData = await this.datamapper.findByPk(id);
    if (!dbData) {
      return next();
    }
    const data = { ...dbData, ...body };
    const row = await this.datamapper.update(data);
    if (!row) {
      return next();
    }
    return res.status(200).json(row);
  }

  static async delete({ params, user }, res, next) {
    const { id } = params;
    const { userId } = user;
    // récupérer le role de l'utilisateur
    const { role: userRole } = user;
    // si le role est admin, on peut supprimer n'importe quel utilisateur
    if (userRole === 'admin') {
      const deleted = await this.datamapper.delete(id);
      if (!deleted) {
        return next();
      }
      return res.status(204).json();
    }
    // parsing and comparing the id and userId
    const isEqual = parseIntAndCompare(id, userId);
    if (!isEqual) {
      const err = new ApiError(
        'Vous n\'avez pas les droits pour accéder à ces informations',
        { httpStatus: 403 },
      );
      return next(err);
    }
    const deleted = await this.datamapper.delete(id);
    if (!deleted) {
      return next();
    }
    return res.status(204).json();
  }

  static async getOneUserWithLikes(req, res, next) {
    const { id } = req.params;
    const { userId } = req.user;
    // parsing and comparing the id and userId
    const isEqual = parseIntAndCompare(id, userId);
    if (!isEqual) {
      const err = new ApiError(
        'Vous n\'avez pas les droits pour accéder à ces informations',
        { httpStatus: 403 },
      );
      return next(err);
    }
    const oneUserWithLikes = await this.datamapper.userTracksLiked(id);
    if (!oneUserWithLikes) {
      const err = new ApiError(
        'Aucun utilisateur trouvé',
        { httpStatus: 404 },
      );
      return next(err);
    }
    return res.status(200).json(oneUserWithLikes);
  }
}
