import userDatamapper from '../datamappers/user.datamapper.js';
import CoreController from './core.controller.js';

export default class AuthController extends CoreController {
  static datamapper = userDatamapper;
}
