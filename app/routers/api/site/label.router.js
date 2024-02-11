import express from 'express';
import labelController from '../../../controllers/label.controller.js';
import controllerWrapper from '../../../helpers/controller.wrapper.js';

const labelRouter = express.Router();

labelRouter
  .route('/')
  /**
   * GET /api/labels
   * @summary Get all labels
   * @tags Labels
   * @return {User[]} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .get(
    controllerWrapper(labelController.getAll.bind(labelController)),
  );

labelRouter
  .route('/:id(\\d+)')
  /**
   * GET /api/labels/{id}
   * @summary Get a label from its id
   * @tags Labels
   * @param {number} id.path.required - label id
   * @return {User} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .get(controllerWrapper(labelController.getByPk.bind(labelController)));

labelRouter
  .route('/albums')
  /**
   * GET /api/labels/albums
   * @summary Get all albums of all labels
   * @tags Labels
   * @return {User[]} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
  */
  .get(
    controllerWrapper(labelController.getAllLabelsWithAlbums.bind(labelController)),
  );

labelRouter
  .route('/:id(\\d+)/albums')
  /**
   * GET /api/labels/{id}/albums
   * @summary Get all albums of one label
   * @tags Labels
   * @return {User[]} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
  */
  .get(
    controllerWrapper(labelController.getOneLabelWithAlbums.bind(labelController)),
  );

labelRouter
  .route('/:id(\\d+)/socials')
  /**
   * GET /api/labels/{id}/albums
   * @summary Get all socials of one label
   * @tags Labels
   * @return {User[]} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
  */
  .get(
    controllerWrapper(labelController.getOneLabelWithsocials.bind(labelController)),
  );
export default labelRouter;
