import express from 'express';
import ApiError from '../../../errors/api.error.js';
import apiAdminUserRouter from './admin.user.router.js';
import apiAdminLabelRouter from './admin.label.router.js';
import apiAdminArtistRouter from './admin.artist.router.js';
import apiAdminSocialRouter from './admin.social.router.js';
import apiAdminAlbumRouter from './admin.album.router.js';
import apiAdminTrackRouter from './admin.track.router.js';
import apiAdminEventRouter from './admin.event.router.js';
 
const apiAdminRouter = express.Router();

apiAdminRouter.use('/users', apiAdminUserRouter);

apiAdminRouter.use('/labels', apiAdminLabelRouter);

apiAdminRouter.use('/artists', apiAdminArtistRouter);

apiAdminRouter.use('/socials', apiAdminSocialRouter);

apiAdminRouter.use('/albums', apiAdminAlbumRouter);

apiAdminRouter.use('/tracks', apiAdminTrackRouter);

apiAdminRouter.use('/events', apiAdminEventRouter);

apiAdminRouter.use((_, __, next) => {
  next(new ApiError('Resource not found', { httpStatus: 404 }));
});

export default apiAdminRouter;
