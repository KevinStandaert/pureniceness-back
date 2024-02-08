import express from 'express';
import authController from '../../controllers/auth.controller.js';
import controllerWrapper from '../../helpers/controller.wrapper.js';
import validationMiddleware from '../../middlewares/validation.middleware.js';
import userCreateSchema from '../../schemas/user.create.schema.js';
import userConnectSchema from '../../schemas/user.connect.schema.js';

const authRouter = express.Router();

authRouter.route('/signout')
  /**
   * GET /api/auth/signout
   * @summary Disconnect user
   * @tags Users
   * @return {User[]} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .get(controllerWrapper(authController.getSignout));

authRouter.route('/signin')
  /**
   * POST /api/auth/signin
   * @summary Connect a user
   * @tags Users
   * @param {userInput} request.body.required - user info
   * @return {User} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .post(
    validationMiddleware('body', userConnectSchema),
    controllerWrapper(authController.postSignin),
  );

authRouter.route('/signup')
  /**
   * POST /api/auth/signup
   * @summary Inscription of a user
   * @tags Users
   * @param {userInput} request.body.required - user info
   * @return {User} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .post(
    validationMiddleware('body', userCreateSchema),
    controllerWrapper(authController.postSignup),
  );

export default authRouter;
