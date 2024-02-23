import TrackDatamapper from '../datamappers/track.datamapper.js';
import CoreController from './core.controller.js';
import ApiError from '../errors/api.error.js';
import getAudioContent from '../utils/get.audio.js';
import extractDriveFileId from '../utils/extract.drive.id.js';

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

  static async getAllTracksWithArtists(req, res, next) {
    const tracksWithArtists = await this.datamapper.findTracksWithArtists();

    if (!tracksWithArtists) {
      const err = new ApiError(
        'Aucun titre trouvé',
        { httpStatus: 404 },
      );
      return next(err);
    }
    return res.status(200).json(tracksWithArtists);
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

  static async getAudio(req, res, next) {
    const { id } = req.params;
    const track = await this.datamapper.findByPk(id);

    if (!track) {
      const err = new ApiError(
        'Le son n\'existe pas',
        { httpStatus: 404 },
      );
      return next(err);
    }
    track.listening = (track.listening || 0) + 1;
    const trackUpdated = await this.datamapper.update(track);
    if (!trackUpdated) {
      console.log('erreur lors de la mise a jour du nombre d écoutes');
    }
    const audioContent = await getAudioContent(extractDriveFileId(track.url_sound));
    res.set('Content-Type', 'audio/mpeg');
    return audioContent.pipe(res);
  }
}
