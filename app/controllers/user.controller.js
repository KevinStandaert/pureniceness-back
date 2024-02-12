import UserDatamapper from '../datamappers/user.datamapper.js';
import CoreController from './core.controller.js';
import ApiError from '../errors/api.error.js';

export default class UserController extends CoreController {
  static datamapper = UserDatamapper;

  static async getOneUserWithLikes(req, res, next) {
    const { id } = req.params;
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
