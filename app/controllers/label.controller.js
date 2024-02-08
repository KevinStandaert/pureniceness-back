import LabelDatamapper from '../datamappers/label.datamapper.js';
import CoreController from './core.controller.js';

export default class LabelController extends CoreController {
  static datamapper = LabelDatamapper;
}
