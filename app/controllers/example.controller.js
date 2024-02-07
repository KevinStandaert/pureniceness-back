import ExempleDatamapper from '../datamappers/example.datamapper.js';
import CoreController from './core.controller.js';

export default class ExempleController extends CoreController {
  static datamapper = ExempleDatamapper;
}
