/**
 * @typedef {object} ApiJsonError - Error response
 * @property {string} error.required - Error message
 * @example
 * {
 *  "error": "Bad request"
 * }
 */

/**
 * Represents an API error with an associated error message and additional information.
 * @class
 * @extends Error
 * @property {string} name - The name of the error class ('ApiError').
 * @property {string} message - The error message.
 * @property {object} info - Additional information related to the error.
 * @example
 * throw new ApiError('Bad request', { statusCode: 400 });
 */
export default class ApiError extends Error {
  /**
   * Creates an instance of ApiError.
   * @constructor
   * @param {string} message - The error message.
   * @param {object} info - Additional information related to the error.
   */
  constructor(message, info) {
    super(message);

    // Set the name of the error class
    this.name = 'ApiError';

    // If additional information is provided, assign it to the 'info' property
    if (info) {
      Object.entries(info).forEach(([key, value]) => {
        this[key] = value;
      });
    }
  }
}
