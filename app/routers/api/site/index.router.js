import express from 'express';
import ApiError from '../../../errors/api.error.js';
import authenticateToken from '../../../middlewares/authenticate.token.js';
import apiUserRouter from './user.router.js';
import apiAuthRouter from './auth.router.js';
import apiLabelRouter from './label.router.js';
import apiAlbumRouter from './album.router.js';
import apiEventRouter from './event.router.js';
import apiContactRouter from './contact.router.js';
import apiTrackRouter from './track.router.js';

const apiSiteRouter = express.Router();

apiSiteRouter.use('/users', authenticateToken, apiUserRouter);

apiSiteRouter.use('/auth', apiAuthRouter);

apiSiteRouter.use('/labels', apiLabelRouter);

apiSiteRouter.use('/albums', apiAlbumRouter);

apiSiteRouter.use('/events', apiEventRouter);

apiSiteRouter.use('/contact', apiContactRouter);

apiSiteRouter.use('/tracks', apiTrackRouter);

apiSiteRouter.use((_, __, next) => {
  next(new ApiError('Resource not found', { httpStatus: 404 }));
});

export default apiSiteRouter;
