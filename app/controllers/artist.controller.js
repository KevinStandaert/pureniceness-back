import ArtistDatamapper from '../datamappers/artist.datamapper.js';
import CoreController from './core.controller.js';

export default class ArtistController extends CoreController {
  static datamapper = ArtistDatamapper;
}
