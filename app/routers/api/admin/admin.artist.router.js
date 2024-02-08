import express from 'express';
import artistController from '../../../controllers/artist.controller.js';
import controllerWrapper from '../../../helpers/controller.wrapper.js';
import validationMiddleware from '../../../middlewares/validation.middleware.js';
import artistCreateSchema from '../../../schemas/label.create.shema.js';
import artistUpdateSchema from '../../../schemas/label.update.schema.js';

const adminArtistRouter = express.Router();

adminArtistRouter.route('/')
  .get(controllerWrapper(artistController.getAll.bind(artistController)))
  .post(
    validationMiddleware('body', artistCreateSchema),
    controllerWrapper(artistController.create.bind(artistController)),
  );

adminArtistRouter.route('/id(\\d+)')
  .get(controllerWrapper(artistController.getByPk.bind(artistController)))
  .patch(
    validationMiddleware('body', artistUpdateSchema),
    controllerWrapper(artistController.update.bind(artistController)),
  )
  .delete(controllerWrapper(artistController.delete.bind(artistController)));

export default adminArtistRouter;
