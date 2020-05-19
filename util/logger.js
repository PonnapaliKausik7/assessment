const bunyan = require('bunyan');
const logger = bunyan.createLogger({name: 'assessment' , streams: [
    {
      level: 'info',
      stream: process.stdout            // log INFO and above to stdout
    },
    {
      level: 'info',
      path: './logger-info.log'  // log info and above to a file
    }
  ]});

  module.exports  = {
      logger
  }