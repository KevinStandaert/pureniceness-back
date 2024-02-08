import express from 'express';
import ApiError from '../../../errors/api.error.js';
import apiUserRouter from './user.router.js';

const apiRouter = express.Router();

apiRouter.use('/users', apiUserRouter);

apiRouter.use((_, __, next) => {
  next(new ApiError('Resource not found', { httpStatus: 404 }));
});

export default apiRouter;
