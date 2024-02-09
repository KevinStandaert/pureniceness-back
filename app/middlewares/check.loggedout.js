import jwt from 'jsonwebtoken';
import ApiError from '../errors/api.error.js';
import tokenDatamapper from '../datamappers/token.datamapper.js';

// eslint-disable-next-line consistent-return
function checkIfLoggedOut(req, res, next) {
  const authHeader = req.headers.authorization;
  // Extracting the JWT token from the Authorization header
  const token = authHeader && authHeader.split(' ')[1];

  // If no token is provided, call next() to proceed to the next middleware
  if (token == null) {
    return next();
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err) => {
    // Check if the token exists in the database
    const tokenExist = await tokenDatamapper.findByToken(token);

    // Check if there was an error while verifying the JWT token or doesn't exist in database
    if (!tokenExist || err) {
      const errorApi = new ApiError(
        'Le token est invalide',
        { httpStatus: 403 },
      );
      return next(errorApi); // Invalid token
    }

    const errorApi = new ApiError(
      'Vous ne pouvez pas avoir accès en étant connecté',
      { httpStatus: 403 },
    );
    return next(errorApi);
  });
}

export default checkIfLoggedOut;
