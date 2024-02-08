import AlbumDatamapper from '../datamappers/album.datamapper.js';
import CoreController from './core.controller.js';

export default class AlbumController extends CoreController {
  static datamapper = AlbumDatamapper;
}
