import winston from 'winston';
import 'winston-daily-rotate-file';

const {
  combine, timestamp: now, label: category, printf, json, colorize,
} = winston.format;

const consoleFormat = printf(({
  level, message, label, timestamp,
}) => `${timestamp} [${label}] ${level}: ${message}`);

// logs mode production
export const transportCombinedFile = new winston.transports.DailyRotateFile({
  level: 'http',
  filename: './logs/combined.log',
  datePattern: 'YYYY-MM-DD-HH-mm',
  zippedArchive: true,
  frequency: '1h',
  maxFiles: '3d',
  format: combine(
    now(),
    json(),
  ),
});

// logs errors mode production
export const transportErrorFile = new winston.transports.DailyRotateFile({
  level: 'error',
  filename: './logs/error.log',
  datePattern: 'YYYY-MM-DD-HH-mm',
  zippedArchive: true,
  frequency: '1h',
  maxFiles: '3d',
  format: combine(
    now(),
    json(),
  ),
});

// logs mode dev
export const transportCombinedConsole = new winston.transports.Console({
  level: 'http',
  format: combine(
    category({ label: 'all' }),
    now(),
    colorize(),
    consoleFormat,
  ),
});
