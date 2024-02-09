import jwt from 'jsonwebtoken';
import ApiError from '../errors/api.error.js';

// Middleware to verify authentication and extract user information
function authenticateToken(req, res, next) {
  // Retrieve the authentication token from the Authorization header
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    const err = new ApiError(
      'Veuillez vous connecter pour accéder à ce contenu',
      { httpStatus: 401 },
    );
    return next(err); // No token, unauthorized access
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      const errorApi = new ApiError(
        'Le token est invalide',
        { httpStatus: 403 },
      );
      return next(errorApi); // Invalid token
    }
    req.user = user; // Attach user data to the req object
    return next(); // Call the next middleware
  });

  return next();
}

export default authenticateToken;
