import express from 'express';
import contactController from '../../../controllers/contact.controller.js';
import controllerWrapper from '../../../helpers/controller.wrapper.js';
import validationMiddleware from '../../../middlewares/validation.middleware.js';
import contactCreateSchema from '../../../schemas/contact.create.schema.js';

const contactRouter = express.Router();

contactRouter
  .route('/')
  /**
   * POST /api/contact
   * @summary Post a message
   * @tags Contacts
   * @param {userInput} request.body.required - user info
   * @return {User[]} 200 - success response - application/json
   * @return {ApiJsonError} 400 - Bad request response - application/json
   * @return {ApiJsonError} 500 - Internal Server Error - application/json
   */
  .post(
    validationMiddleware('body', contactCreateSchema),
    controllerWrapper(contactController.create.bind(contactController)),
  );

// contactRouter
//  .route('/:id(\\d+)')
//  /**
//   * GET /api/contact/{id}
//   * @summary Get a message from its id
//   * @tags Contact
//   * @param {number} id.path.required - user id
//   * @return {User} 200 - success response - application/json
//   * @return {ApiJsonError} 400 - Bad request response - application/json
//   * @return {ApiJsonError} 404 - Not found response - application/json
//   * @return {ApiJsonError} 500 - Internal Server Error - application/json
//   */
//  .get(controllerWrapper(contactController.getByPk.bind(contactController)))
//  /**
//   * DELETE /api/contact/{id}
//   * @summary Delete a message
//   * @tags Contact
//   * @param {number} id.path.required - user id
//   * @return {User} 200 - success response - application/json
//   * @return {ApiJsonError} 400 - Bad request response - application/json
//   * @return {ApiJsonError} 404 - Not found response - application/json
//   * @return {ApiJsonError} 500 - Internal Server Error - application/json
//   */
//  .delete(controllerWrapper(contactController.delete.bind(contactController)));

export default contactRouter;
