import express from 'express';
import authController from '../../../controllers/auth.controller.js';
import controllerWrapper from '../../../helpers/controller.wrapper.js';
import validationMiddleware from '../../../middlewares/validation.middleware.js';
import userCreateSchema from '../../../schemas/user.create.schema.js';
import userConnectSchema from '../../../schemas/user.connect.schema.js';
import authenticateToken from '../../../middlewares/authenticate.token.js';
import isLoggedOut from '../../../middlewares/check.loggedout.js';

const authRouter = express.Router();

authRouter.route('/signout')
  /**
   * GET /api/auth/signout
   * @summary Disconnect user
   * @tags Users
   * @return {object} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .get(
    authenticateToken,
    controllerWrapper(authController.getSignout),
  );

authRouter.route('/signin')
  /**
   * POST /api/auth/signin
   * @summary Connect a user
   * @tags Authentification
   * @param {userInput} request.body.required - User information
   * @return {object} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response (Invalid input) - application/json
   * @return {ApiJsonError} 401 - Unauthorized response (Mail or password incorrect)
   * @return {ApiJsonError} 404 - Not found response (User not found)
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .post(
    isLoggedOut,
    validationMiddleware('body', userConnectSchema),
    controllerWrapper(authController.postSignin),
  );

authRouter.route('/signup')
  /**
   * POST /api/auth/signup
   * @summary Inscription of a user
   * @tags Authentification
   * @param {userInput} request.body.required - User information
   * @return {object} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response (Invalid input) - application/json
   * @return {ApiJsonError} 409 - Conflict response (Email already in use) - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .post(
    isLoggedOut,
    validationMiddleware('body', userCreateSchema),
    controllerWrapper(authController.postSignup),
  );

export default authRouter;
