import express from 'express';
import trackController from '../../../controllers/track.controller.js';
import controllerWrapper from '../../../helpers/controller.wrapper.js';
import authenticateToken from '../../../middlewares/authenticate.token.js';

const trackRouter = express.Router();

trackRouter.route('/')
/**
 * GET /api/tracks
 * @summary Get all tracks
 * @tags Tracks
 * @return {Track[]} 200 - success response - application/json
 * @return {ApiJsonError} 400 - Bad request response - application/json
 * @return {ApiJsonError} 500 - Internal Server Error - application/json
 */
  .get(
    controllerWrapper(trackController.getAll.bind(trackController)),
  );

trackRouter.route('/:id(\\d+)')
/**
   * GET /api/tracks/{id}
   * @summary Get a track by id
   * @tags Tracks
   * @param {number} id.path.required - track id
   * @return {Track} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .get(
    controllerWrapper(trackController.getByPk.bind(trackController)),
  );

trackRouter.route('/:id(\\d+)/artists')
/**
   * GET /api/tracks/{id}/artists
   * @summary Get track with artists
   * @tags Tracks
   * @return {Track} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
  */
  .get(
    controllerWrapper(trackController.getOneTrackWithArtists.bind(trackController)),
  );

trackRouter.route('/artists')
/**
   * GET /api/tracks/artists
   * @summary Get tracks with artists
   * @tags Tracks
   * @return {Track} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
  */
  .get(
    controllerWrapper(trackController.getAllTracksWithArtists.bind(trackController)),
  );

trackRouter.route('/:id(\\d+)/likes')
/**
   * GET /api/tracks/{id}/likes
   * @summary User add like to one Track
   * @tags Tracks
   * @return {Track} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
  */
  .get(
    authenticateToken,
    controllerWrapper(trackController.addLike.bind(trackController)),
  );

trackRouter.route('/:id(\\d+)/audio')
/**
   * GET /api/tracks/{id}/audio
   * @summary get audio for one track
   * @tags Tracks
   * @return {Track} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
  */
  .get(
    controllerWrapper(trackController.getAudio.bind(trackController)),
  );
export default trackRouter;
