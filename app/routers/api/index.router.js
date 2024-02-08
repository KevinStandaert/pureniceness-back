import express from 'express';
import apiRouter from './site/index.router.js';
import adminRouter from './admin/index.router.js';
import errorHandler from '../../helpers/error.handler.js';

const router = express.Router();

router.use('/site', apiRouter);

router.use('/admin', adminRouter);

router.use(errorHandler);

export default router;
