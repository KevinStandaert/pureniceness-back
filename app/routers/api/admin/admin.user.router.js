import express from 'express';
import userController from '../../../controllers/user.controller.js';
import authController from '../../../controllers/auth.controller.js';
import controllerWrapper from '../../../helpers/controller.wrapper.js';
import validationMiddleware from '../../../middlewares/validation.middleware.js';
import userCreateSchema from '../../../schemas/user.create.schema.js';
import userUpdateSchema from '../../../schemas/user.update.schema.js';

const adminUserRouter = express.Router();

adminUserRouter.route('/')
  /**
   * GET /api/admin/users
   * @summary Get all users
   * @tags Admin Users
   * @return {User[]} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .get(controllerWrapper(userController.getAll.bind(userController)))
  /**
   * POST /api/admin/users
   * @summary Create a new user
   * @tags Admin Users
   * @param {userInput} request.body.required - user info
   * @return {User} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .post(
    validationMiddleware('body', userCreateSchema),
    controllerWrapper(authController.postSignup),
  );

adminUserRouter.route('/:id(\\d+)')
  /**
   * GET /api/admin/users/{id}
   * @summary Get a user from its id
   * @tags Admin Users
   * @param {number} id.path.required - user id
   * @return {User} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .get(controllerWrapper(userController.getByPk.bind(userController)))
  /**
   * PATCH /api/admin/users/{id}
   * @summary Update a user
   * @tags Admin Users
   * @param {number} id.path.required - user id
   * @param {userInput} request.body.required - user info
   * @return {User} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .patch(
    validationMiddleware('body', userUpdateSchema),
    controllerWrapper(userController.update.bind(userController)),
  )
  /**
   * DELETE /api/admin/users/{id}
   * @summary Delete a user
   * @tags Admin Users
   * @param {number} id.path.required - user id
   * @return {User} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .delete(controllerWrapper(userController.delete.bind(userController)));

export default adminUserRouter;
