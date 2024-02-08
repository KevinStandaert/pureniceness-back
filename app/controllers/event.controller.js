import EventDatamapper from '../datamappers/label.datamapper.js';
import CoreController from './core.controller.js';

export default class EventController extends CoreController {
  static datamapper = EventDatamapper;
}
