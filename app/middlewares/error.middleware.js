/**
 * @param {Error} err
 * @param {Express.Request} request
 * @param {Express.Response} response
 * @param {Express.NextFunction} next
 * @returns {Express.Response}
 */
// eslint-disable-next-line no-unused-vars
export default (err, request, response, next) => {
  const errObject = err;
  const status = errObject.httpStatus || 500;
  if (status === 500) {
    console.error(errObject);
    errObject.message = 'Internal Server Error';
  }
  return response.status(status).json({ error: errObject.message });
};
