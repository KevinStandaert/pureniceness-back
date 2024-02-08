import express from 'express';
import apiRouter from './api/site/index.router.js';
import apiAdminRouter from './api/admin/index.router.js';

const router = express.Router();

router.use('/api', apiRouter, apiAdminRouter);

export default router;
