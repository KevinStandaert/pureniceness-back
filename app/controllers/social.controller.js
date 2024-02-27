import SocialDatamapper from '../datamappers/social.datamapper.js';
import CoreController from './core.controller.js';

export default class SocialController extends CoreController {
  static datamapper = SocialDatamapper;
}
