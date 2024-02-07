import UserDatamapper from '../datamappers/user.datamapper.js';
import CoreController from './core.controller.js';

export default class UserController extends CoreController {
  static datamapper = UserDatamapper;
}
