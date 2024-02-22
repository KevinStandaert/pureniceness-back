import AlbumDatamapper from '../datamappers/album.datamapper.js';
import CoreController from './core.controller.js';
import ApiError from '../errors/api.error.js';

export default class AlbumController extends CoreController {
  static datamapper = AlbumDatamapper;

  // Function to get all tracks of one album
  static async getOneAlbumWithTracks(req, res, next) {
    const { id } = req.params;
    const oneAlbumWithTracks = await this.datamapper.findOneAlbumWithTracks(id);
    if (!oneAlbumWithTracks) {
      const err = new ApiError(
        'Aucun album n\'a été trouvé',
        { httpStatus: 404 },
      );
      return next(err);
    }
    return res.status(200).json(oneAlbumWithTracks);
  }

  // Function to get all tracks of one album with favorites
  static async getOneAlbumWithTracksWithFavorites(req, res, next) {
    const { id } = req.params;
    const { user } = req;
    const oneAlbumWithTracks = await this.datamapper.findOneAlbumWithTracksWithFavorites(id, user.userId);
    if (!oneAlbumWithTracks) {
      const err = new ApiError(
        'Aucun album n\'a été trouvé',
        { httpStatus: 404 },
      );
      return next(err);
    }
    return res.status(200).json(oneAlbumWithTracks);
  }
}
