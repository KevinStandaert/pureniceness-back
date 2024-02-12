import express from 'express';
import trackController from '../../../controllers/track.controller.js';
import controllerWrapper from '../../../helpers/controller.wrapper.js';

const trackRouter = express.Router();

trackRouter.route('/')
/**
 * GET /api/tracks
 * @summary Get all tracks
 * @tags Track
 * @return {Track[]} 200 - success response - application/json
 * @return {ApiJsonError} 400 - Bad request response - application/json
 * @return {ApiJsonError} 500 - Internal Server Error - application/json
 */
  .get(
    controllerWrapper(trackController.getAll.bind(trackController)),
  );

trackRouter.route('/:id(\\d+)')
/**
   * GET /api/albums/{id}
   * @summary Get a track by id
   * @tags Track
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
   * @tags Track
   * @return {Track} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
  */
  .get(
    controllerWrapper(trackController.getOneTrackWithArtists.bind(trackController)),
  );

trackRouter.route('/:id(\\d+)/likes')
/**
   * GET /api/tracks/{id}/artists
   * @summary Get track with artists
   * @tags Track
   * @return {Track} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
  */
  .post(
    controllerWrapper(trackController.addLike.bind(trackController)),
  );
export default trackRouter;
