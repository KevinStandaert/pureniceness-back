import express from 'express';
import authController from '../../controllers/auth.controller.js';
import controllerWrapper from '../../helpers/controller.wrapper.js';
import validationMiddleware from '../../middlewares/validation.middleware.js';
import userCreateSchema from '../../schemas/user.create.schema.js';
import userConnectSchema from '../../schemas/user.connect.schema.js';

const authRouter = express.Router();

authRouter.route('/signout')
  /**
   * GET /api/users
   * @summary Disconnect user
   * @tags Users
   * @return {User[]} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .get(controllerWrapper(authController.getSignout.bind(authController)));

authRouter.route('/signin')
  /**
   * POST /api/users
   * @summary Connect a user
   * @tags Users
   * @param {userInput} request.body.required - user info
   * @return {User} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .post(
    validationMiddleware('body', userConnectSchema),
    controllerWrapper(authController.postSignin.bind(authController)),
  );

authRouter.route('/signup')
  /**
   * POST /api/users
   * @summary Inscription of a user
   * @tags Users
   * @param {userInput} request.body.required - user info
   * @return {User} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .post(
    validationMiddleware('body', userCreateSchema),
    controllerWrapper(authController.postSignup.bind(authController)),
  );

export default authRouter;
