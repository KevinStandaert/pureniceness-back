import express from 'express';
import ApiError from '../../../errors/api.error.js';
import apiAdminUserRouter from './admin.user.router.js';
import apiAdminLabelRouter from './admin.label.router.js';

const apiAdminRouter = express.Router();

apiAdminRouter.use('/users', apiAdminUserRouter);

apiAdminRouter.use('/labels', apiAdminLabelRouter);

apiAdminRouter.use((_, __, next) => {
  next(new ApiError('Resource not found', { httpStatus: 404 }));
});

export default apiAdminRouter;
