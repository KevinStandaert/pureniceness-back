import express from 'express';
import ApiError from '../../../errors/api.error.js';
import apiUserRouter from './user.router.js';

const apiSiteRouter = express.Router();

apiSiteRouter.use('/users', apiUserRouter);

apiSiteRouter.use((_, __, next) => {
  next(new ApiError('Resource not found', { httpStatus: 404 }));
});

export default apiSiteRouter;
