import ApiError from '../errors/api.error.js';

export default (controller) => async (request, response, next) => {
  try {
    await controller(request, response, next);
  } catch (err) {
    next(new ApiError(err.message, { httpStatus: 500 }));
  }
};
