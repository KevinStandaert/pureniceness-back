import EventDatamapper from '../datamappers/event.datamapper.js';
import CoreController from './core.controller.js';

export default class EventController extends CoreController {
  static datamapper = EventDatamapper;
}
