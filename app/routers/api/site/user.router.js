import express from 'express';
import userController from '../../../controllers/user.controller.js';
import controllerWrapper from '../../../helpers/controller.wrapper.js';
import validationMiddleware from '../../../middlewares/validation.middleware.js';
import userCreateSchema from '../../../schemas/user.create.schema.js';
import userUpdateSchema from '../../../schemas/user.update.schema.js';

const userRouter = express.Router();

userRouter
  .route('/')
  /**
   * GET /api/users
   * @summary Get all users
   * @tags Users
   * @return {User[]} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .get(controllerWrapper(userController.getAll.bind(userController)))
  /**
   * POST /api/users
   * @summary Create a new user
   * @tags Users
   * @param {userInput} request.body.required - user info
   * @return {User} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .post(
    validationMiddleware('body', userCreateSchema),
    controllerWrapper(userController.create.bind(userController)),
  );

userRouter
  .route('/:id(\\d+)')
  /**
   * GET /api/users/{id}
   * @summary Get a user from its id
   * @tags Users
   * @param {number} id.path.required - user id
   * @return {User} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .get(controllerWrapper(userController.getByPk.bind(userController)))
  /**
   * PATCH /api/users/{id}
   * @summary Update a user
   * @tags Users
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
   * DELETE /api/users/{id}
   * @summary Delete a user
   * @tags Users
   * @param {number} id.path.required - user id
   * @return {User} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .delete(controllerWrapper(userController.delete.bind(userController)));

export default userRouter;
