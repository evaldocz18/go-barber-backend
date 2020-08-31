const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Http({
      level: 'warn',
      from: new Date() - 24 * 60 * 60 * 1000,
      until: new Date(),
      order: 'desc',
      format: winston.format.json(),
    }),
    new winston.transports.Console({
      level: 'info',
      from: new Date() - 24 * 60 * 60 * 1000,
      until: new Date(),
      order: 'desc',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
});

module.exports = logger;
