import express from 'express';
import eventController from '../../../controllers/event.controller.js';
import controllerWrapper from '../../../helpers/controller.wrapper.js';
import validationMiddleware from '../../../middlewares/validation.middleware.js';
import eventCreateSchema from '../../../schemas/event.create.shema.js';
import labelUpdateSchema from '../../../schemas/event.update.schema.js';

const adminEventRouter = express.Router();

adminEventRouter.route('/')
  .get(controllerWrapper(eventController.getAll.bind(eventController)))
  .post(
    validationMiddleware('body', eventCreateSchema),
    controllerWrapper(eventController.create.bind(eventController)),
  );

adminEventRouter.route('/:id(\\d+)')
  .get(controllerWrapper(eventController.getByPk.bind(eventController)))
  .patch(
    validationMiddleware('body', labelUpdateSchema),
    controllerWrapper(eventController.update.bind(eventController)),
  )
  .delete(controllerWrapper(eventController.delete.bind(eventController)));

export default adminEventRouter;
