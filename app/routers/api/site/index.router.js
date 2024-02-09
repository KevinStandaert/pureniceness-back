import express from 'express';
import ApiError from '../../../errors/api.error.js';
import apiUserRouter from './user.router.js';
import apiAuthRouter from './auth.router.js';
import apiLabelRouter from './label.router.js';

const apiSiteRouter = express.Router();

apiSiteRouter.use('/users', apiUserRouter);

apiSiteRouter.use('/auth', apiAuthRouter);

apiSiteRouter.use('/labels', apiLabelRouter);

apiSiteRouter.use((_, __, next) => {
  next(new ApiError('Resource not found', { httpStatus: 404 }));
});

export default apiSiteRouter;
