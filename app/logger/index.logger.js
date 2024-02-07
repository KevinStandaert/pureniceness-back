import winston from 'winston';

import {
  transportCombinedFile,
  transportErrorFile,
  transportCombinedConsole,
} from './transports.logger.js';

// Logging in the 'logs' directory to keep a record of what is happening
// on the site
const transports = [];

if (process.env.NODE_ENV === 'production') {
  transports.push(transportCombinedFile, transportErrorFile);
} else {
  transports.push(transportCombinedConsole);
}

const logger = winston.createLogger({
  transports,
});

export default logger;
