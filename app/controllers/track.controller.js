import TrackDatamapper from '../datamappers/track.datamapper.js';
import CoreController from './core.controller.js';

export default class TrackController extends CoreController {
  static datamapper = TrackDatamapper;
}
