import express from 'express';
import trackController from '../../../controllers/track.controller.js';
import controllerWrapper from '../../../helpers/controller.wrapper.js';
import validationMiddleware from '../../../middlewares/validation.middleware.js';
import trackCreateSchema from '../../../schemas/track.create.schema.js';
import trackUpdateSchema from '../../../schemas/track.update.schema.js';

const adminTrackRouter = express.Router();

adminTrackRouter.route('/')
  .get(controllerWrapper(trackController.getAll.bind(trackController)))
  .post(
    validationMiddleware('body', trackCreateSchema),
    controllerWrapper(trackController.create.bind(trackController)),
  );

adminTrackRouter.route('/:id(\\d+)')
  .get(controllerWrapper(trackController.getByPk.bind(trackController)))
  .patch(
    validationMiddleware('body', trackUpdateSchema),
    controllerWrapper(trackController.update.bind(trackController)),
  )
  .delete(controllerWrapper(trackController.delete.bind(trackController)));

export default adminTrackRouter;
