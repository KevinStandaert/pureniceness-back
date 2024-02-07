import express from 'express';
import ApiError from '../../errors/api.error.js';
import apiExampleRouter from './example.router.js';

const apiRouter = express.Router();

apiRouter.use('/example', apiExampleRouter);

apiRouter.use((_, __, next) => {
  next(new ApiError('Resource not found', { httpStatus: 404 }));
});

export default apiRouter;
