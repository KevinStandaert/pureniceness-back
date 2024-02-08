import express from 'express';
import albumController from '../../../controllers/label.controller.js';
import controllerWrapper from '../../../helpers/controller.wrapper.js';
import validationMiddleware from '../../../middlewares/validation.middleware.js';
import albumCreateSchema from '../../../schemas/label.create.shema.js';
import albumUpdateSchema from '../../../schemas/label.update.schema.js';

const adminAlbumRouter = express.Router();

adminAlbumRouter.route('/')
  .get(controllerWrapper(albumController.getAll.bind(albumController)))
  .post(
    validationMiddleware('body', albumCreateSchema),
    controllerWrapper(albumController.create.bind(albumController)),
  );

adminAlbumRouter.route('/:id(\\d+)')
  .get(controllerWrapper(albumController.getByPk.bind(albumController)))
  .patch(
    validationMiddleware('body', albumUpdateSchema),
    controllerWrapper(albumController.update.bind(albumController)),
  )
  .delete(controllerWrapper(albumController.delete.bind(albumController)));

export default adminAlbumRouter;
