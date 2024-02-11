import LabelDatamapper from '../datamappers/label.datamapper.js';
import CoreController from './core.controller.js';
import ApiError from '../errors/api.error.js';

export default class LabelController extends CoreController {
  static datamapper = LabelDatamapper;

  // Function to get all albums of all labels
  static async getAllLabelsWithAlbums(_, res, next) {
    const labelsWithAlbums = await this.datamapper.findAllLabelsWithAlbums();
    if (!labelsWithAlbums) {
      const err = new ApiError(
        'Aucun label n\'a été trouvé',
        { httpStatus: 404 },
      );
      return next(err);
    }
    return res.status(200).json(labelsWithAlbums);
  }

  // Function to get one label with its albums
  static async getOneLabelWithAlbums(req, res, next) {
    const { id } = req.params;
    const oneLabelWithAlbums = await this.datamapper.findOneLabelWithAlbums(id);
    if (!oneLabelWithAlbums) {
      const err = new ApiError(
        'Aucun label n\'a été trouvé',
        { httpStatus: 404 },
      );
      return next(err);
    }
    return res.status(200).json(oneLabelWithAlbums);
  }

  // Function to get one label with its socials
  static async getOneLabelWithsocials(req, res, next) {
    const { id } = req.params;
    const oneLabelWithSocials = await this.datamapper.findOneLabelWithSocials(id);
    if (!oneLabelWithSocials) {
      const err = new ApiError(
        'Aucun label n\'a été trouvé',
        { httpStatus: 404 },
      );
      return next(err);
    }
    if (oneLabelWithSocials.length === 0) {
      const err = new ApiError(
        'Aucun label n\'a été trouvé',
        { httpStatus: 404 },
      );
      return next(err);
    }
    return res.status(200).json(oneLabelWithSocials);
  }
}
