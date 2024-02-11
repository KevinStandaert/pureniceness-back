import express from 'express';
import eventController from '../../../controllers/event.controller.js';
import controllerWrapper from '../../../helpers/controller.wrapper.js';

const eventRouter = express.Router();

eventRouter
  .route('/')
  /**
   * GET /api/events
   * @summary Get all events
   * @tags Events
   * @return {User[]} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .get(
    controllerWrapper(eventController.getAll.bind(eventController)),
  );

eventRouter
  .route('/:id(\\d+)')
  /**
   * GET /api/events/{id}
   * @summary Get an event from its id
   * @tags Events
   * @param {number} id.path.required - label id
   * @return {User} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 404 - Not found response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .get(controllerWrapper(eventController.getByPk.bind(eventController)));

export default eventRouter;
