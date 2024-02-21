import TrackDatamapper from '../datamappers/track.datamapper.js';
import CoreController from './core.controller.js';
import ApiError from '../errors/api.error.js';

export default class TrackController extends CoreController {
  static datamapper = TrackDatamapper;

  // Function to get tracks with artists
  static async getOneTrackWithArtists(req, res, next) {
    const { id } = req.params;
    const oneTrackWithArtists = await this.datamapper.findTrackWithArtists(id);

    if (!oneTrackWithArtists) {
      const err = new ApiError(
        'Aucun titre trouvé',
        { httpStatus: 404 },
      );
      return next(err);
    }
    return res.status(200).json(oneTrackWithArtists);
  }

  static async addLike(req, res, next) {
    const { id } = req.params;
    const { userId } = req.user;
    const addLike = await this.datamapper.addLike(userId, id);
    if (!addLike) {
      const err = new ApiError(
        'Erreur lors de l\'ajout aux favoris',
        { httpStatus: 404 },
      );
      return next(err);
    }
    if (addLike === 1) {
      return res.status(200).json('Suppression du favori réussie');
    }
    return res.status(200).json('Ajout aux favoris réussi');
  }
}
