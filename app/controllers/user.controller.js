import UserDatamapper from '../datamappers/user.datamapper.js';
import CoreController from './core.controller.js';
import ApiError from '../errors/api.error.js';
import parseIntAndCompare from '../utils/parseint.compare.js';

export default class UserController extends CoreController {
  static datamapper = UserDatamapper;

  static async getOneUserWithLikes(req, res, next) {
    const { id } = req.params;
    const { userId } = req.user;
    // user connected can modify only its infos
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

  static async delete({ params, user }, res, next) {
    const { id } = params;
    const { userId } = user;
    const { role: userRole } = user;
    // admin can modify
    if (userRole === 'admin') {
      // admin can't delete the main admin account
      if (parseInt(id, 10) === 1) {
        const err = new ApiError(
          'Vous ne pouvez pas supprimer ces informations, seule la modification est possible',
          { httpStatus: 423 },
        );
        return next(err);
      }
      const deleted = await this.datamapper.delete(id);
      if (!deleted) {
        return next();
      }
      return res.status(204).json();
    }
    // user connected can modify only its infos
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
}
