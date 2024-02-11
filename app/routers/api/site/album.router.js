import express from 'express';
import albumController from '../../../controllers/album.controller.js';
import controllerWrapper from '../../../helpers/controller.wrapper.js';

const albumRouter = express.Router();

albumRouter
  .route('/')
  /**
   * GET /api/labels
   * @summary Get all tracks
   * @tags Labels
   * @return {User[]} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .get(
    controllerWrapper(albumController.getAll.bind(albumController)),
  );

albumRouter
  .route('/:id(\\d+)')
  /**
   * GET /api/labels/{id}
   * @summary Get a track from its id
   * @tags Labels
   * @param {number} id.path.required - label id
   * @return {User} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .get(controllerWrapper(albumController.getByPk.bind(albumController)));

albumRouter
  .route('/:id(\\d+)/tracks')
  /**
   * GET /api/labels/{id}/tracks
   * @summary Get all tracks of one album
   * @tags Labels
   * @return {User[]} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
  */
  .get(
    controllerWrapper(albumController.getOneAlbumWithTracks.bind(albumController)),
  );

export default albumRouter;
