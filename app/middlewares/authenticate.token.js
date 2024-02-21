import jwt from 'jsonwebtoken';
import ApiError from '../errors/api.error.js';
import tokenDatamapper from '../datamappers/token.datamapper.js';

// Middleware to verify authentication and extract user information
// eslint-disable-next-line consistent-return
function authenticateToken(req, res, next) {
  // Retrieve the authentication token from the Authorization header
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  // == and not === for testing if token is null or undefined
  if (token == null) {
    // If no token is provided, return a 401 error (Unauthorized)
    const err = new ApiError(
      'Veuillez vous connecter pour accéder à ce contenu',
      { httpStatus: 401 },
    );
    return next(err); // No token, unauthorized access
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
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

    // Get the current timestamp in seconds to compare with token expiration
    const currentTimestampInSeconds = Math.floor(Date.now() / 1000);

    if (user.exp < currentTimestampInSeconds) {
      // If the token has expired, delete it from the database and return a 403 error (Forbidden)
      await tokenDatamapper.delete(tokenExist.id);
      const errorApi = new ApiError(
        'La session a expiré',
        { httpStatus: 403 },
      );
      return next(errorApi); // Invalid token (expired)
    }
    req.user = user; // Attach user data to the req object
    return next(); // Call the next middleware
  });
}

export default authenticateToken;
