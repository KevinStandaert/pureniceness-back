import express from 'express';
import albumController from '../../../controllers/album.controller.js';
import controllerWrapper from '../../../helpers/controller.wrapper.js';
import validationMiddleware from '../../../middlewares/validation.middleware.js';
import albumCreateSchema from '../../../schemas/album.create.schema.js';
import albumUpdateSchema from '../../../schemas/album.update.schema.js';
import updateOrdersSchema from '../../../schemas/order.update.js';

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

adminAlbumRouter.route('/:id(\\d+)/tracks/orders')
  .patch(
    validationMiddleware('body', updateOrdersSchema),
    controllerWrapper(albumController.updateOrders.bind(albumController)),
  );

export default adminAlbumRouter;
