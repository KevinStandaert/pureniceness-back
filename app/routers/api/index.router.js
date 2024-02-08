import express from 'express';
import apiRouter from './site/index.router.js';
import adminRouter from './admin/index.router.js';

const router = express.Router();

router.use('/site', apiRouter);

router.use('/admin', adminRouter);

export default router;
