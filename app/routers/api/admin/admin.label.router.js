import express from 'express';
import labelController from '../../../controllers/label.controller.js';
import controllerWrapper from '../../../helpers/controller.wrapper.js';
import validationMiddleware from '../../../middlewares/validation.middleware.js';
import labelCreateSchema from '../../../schemas/label.create.schema.js';
import labelUpdateSchema from '../../../schemas/label.update.schema.js';

const adminLabelRouter = express.Router();

adminLabelRouter.route('/')
  .get(controllerWrapper(labelController.getAll.bind(labelController)))
  .post(
    validationMiddleware('body', labelCreateSchema),
    controllerWrapper(labelController.create.bind(labelController)),
  );

adminLabelRouter.route('/:id(\\d+)')
  .get(controllerWrapper(labelController.getByPk.bind(labelController)))
  .patch(
    validationMiddleware('body', labelUpdateSchema),
    controllerWrapper(labelController.update.bind(labelController)),
  )
  .delete(controllerWrapper(labelController.delete.bind(labelController)));

export default adminLabelRouter;
