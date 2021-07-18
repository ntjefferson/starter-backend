const winston = require('winston');

const {
  combine, timestamp, colorize, simple,
} = winston.format;

const options = {
  development: {
    level: 'debug',
    handleExceptions: true,
    json: true,
    colorize: true,
    format: combine(
      timestamp(),
      colorize(),
      simple(),
    ),
  },
  production: {
    level: 'info',
    handleExceptions: true,
    json: true,
    colorize: true,
    format: combine(
      timestamp(),
    ),
  },
};

// eslint-disable-next-line new-cap
const logger = new winston.createLogger({
  transports: [
    new winston.transports.Console(process.env.NODE_ENV === 'production'
      ? options.production : options.development),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

if (process.env.NODE_ENV === 'test') {
  logger.silent = true;
}

export default logger;
