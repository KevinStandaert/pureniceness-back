import express from 'express';
import socialController from '../../../controllers/social.controller.js';
import controllerWrapper from '../../../helpers/controller.wrapper.js';
import validationMiddleware from '../../../middlewares/validation.middleware.js';
import socialCreateSchema from '../../../schemas/label.create.shema.js';
import socialUpdateSchema from '../../../schemas/label.update.schema.js';

const adminSocialRouter = express.Router();

adminSocialRouter.route('/')
  .get(controllerWrapper(socialController.getAll.bind(socialController)))
  .post(
    validationMiddleware('body', socialCreateSchema),
    controllerWrapper(socialController.create.bind(socialController)),
  );

adminSocialRouter.route('/:id(\\d+)')
  .get(controllerWrapper(socialController.getByPk.bind(socialController)))
  .patch(
    validationMiddleware('body', socialUpdateSchema),
    controllerWrapper(socialController.update.bind(socialController)),
  )
  .delete(controllerWrapper(socialController.delete.bind(socialController)));

export default adminSocialRouter;
