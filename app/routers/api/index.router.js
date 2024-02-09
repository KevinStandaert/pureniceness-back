import express from 'express';
import apiRouter from './site/index.router.js';
import adminRouter from './admin/index.router.js';
import errorHandler from '../../helpers/error.handler.js';
import authenticateToken from '../../middlewares/authenticate.token.js';
import authorizeAdmin from '../../middlewares/authorize.admin.js';

const router = express.Router();

router.use('/', apiRouter);

router.use('/admin', authenticateToken, authorizeAdmin, adminRouter);

router.use(errorHandler);

export default router;
