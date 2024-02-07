import logger from '../logger/index.logger.js';

export default function httpLogger(request, response, next) {
  response.on('finish', () => {
    const clientIP = request.ip;

    const actualStatus = response.statusCode;

    const logInfo = {
      httpStatus: actualStatus,
      level: 'http',
      message: `${clientIP} ${request.method} ${request.originalUrl}`,
      timestamp: new Date().toISOString(),
    };

    logger.http(logInfo);
  });

  next();
}
