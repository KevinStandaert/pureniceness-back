import express from 'express';
import albumController from '../../../controllers/album.controller.js';
import controllerWrapper from '../../../helpers/controller.wrapper.js';
import authenticateToken from '../../../middlewares/authenticate.token.js';

const albumRouter = express.Router();

albumRouter
  .route('/')
  /**
   * GET /api/albums
   * @summary Get all albums
   * @tags Albums
   * @return {Album[]} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .get(
    controllerWrapper(albumController.getAll.bind(albumController)),
  );

albumRouter
  .route('/:id(\\d+)')
  /**
   * GET /api/albums/{id}
   * @summary Get an album by id
   * @tags Albums
   * @param {number} id.path.required - album id
   * @return {Album} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .get(controllerWrapper(albumController.getByPk.bind(albumController)));

albumRouter
  .route('/:id(\\d+)/tracks')
  /**
   * GET /api/albums/{id}/tracks
   * @summary Get all tracks of one album
   * @tags Albums
   * @return {Album} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
  */
  .get(
    controllerWrapper(albumController.getOneAlbumWithTracks.bind(albumController)),
  );

albumRouter
  .route('/:id(\\d+)/tracks/likes')
  /**
   * GET /api/albums/{id}/tracks/likes
   * @summary Get all tracks of one album with likes
   * @tags Albums
   * @return {Album} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
  */
  .get(
    authenticateToken,
    controllerWrapper(albumController.getOneAlbumWithTracksWithFavorites.bind(albumController)),
  );

export default albumRouter;
