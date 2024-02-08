import express from 'express';
import labelController from '../../../controllers/label.controller.js';
import controllerWrapper from '../../../helpers/controller.wrapper.js';
import validationMiddleware from '../../../middlewares/validation.middleware.js';

const adminLabelRouter = express.Router();

adminLabelRouter.route('/labels')
  .get(controllerWrapper(labelController.getAll.bind(labelController)))
  .post(
    validationMiddleware('body', labelCreateSchema),
    controllerWrapper(labelController.create.bind(labelController)),
  );

adminLabelRouter.route('/labels/:id(\\d+)')
  .get(controllerWrapper(labelController.getByPk.bind(labelController)))
  .patch(
    validationMiddleware('body', labelCreateSchema),
    controllerWrapper(labelController.update.bind(labelController)),
  )
  .delete(controllerWrapper(labelController.delete.bind(labelController)));

export default adminLabelRouter;
