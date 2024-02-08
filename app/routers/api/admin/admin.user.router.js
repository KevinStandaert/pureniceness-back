import express from 'express';
import userController from '../../../controllers/user.controller.js';
import controllerWrapper from '../../../helpers/controller.wrapper.js';
import validationMiddleware from '../../../middlewares/validation.middleware.js';
import userCreateSchema from '../../../schemas/user.create.schema.js';

const adminUserRouter = express.Router();

adminUserRouter.route('/users')
  .get(controllerWrapper(userController.getAll.bind(userController)))
  .post(
    validationMiddleware('body', userCreateSchema),
    controllerWrapper(userController.create.bind(userController)),
  );

adminUserRouter.route('/users/:id(\\d+)')
  .get(controllerWrapper(userController.getByPk.bind(userController)))
  .patch(
    validationMiddleware('body', userCreateSchema),
    controllerWrapper(userController.create.bind(userController)),
  )
  .delete(controllerWrapper(userController.delete.bind(userController)));

export default adminUserRouter;
