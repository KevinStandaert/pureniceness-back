import TokenDatamapper from '../datamappers/token.datamapper.js';
import CoreController from './core.controller.js';

export default class TokenController extends CoreController {
  static datamapper = TokenDatamapper;
}
