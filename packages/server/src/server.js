'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const http_1 = __importDefault(require('http'));
const app_1 = __importDefault(require('./app'));
const logger_1 = require('./libs/logger');
const normalizePort = (val) => {
  const portOrPipe = parseInt(val, 10);
  if (isNaN(portOrPipe)) {
    // named pipe
    return val;
  }
  if (portOrPipe >= 0) {
    // port number
    return portOrPipe;
  }
  return false;
};
// Get port from environment and store in Express.
const port = normalizePort(process.env.PORT || '8080');
app_1.default.set('port', port);
// Create HTTP server.
const server = http_1.default.createServer(app_1.default);
const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger_1.logger.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger_1.logger.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
};
const onListening = () => {
  const addr = server.address();
  const bind =
    typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + (addr === null || addr === void 0 ? void 0 : addr.port);
  logger_1.logger.info(`Server is listening on ${bind}`);
};
const main = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);
  });
main().catch((error) => logger_1.logger.error(error));
process.on('unhandledRejection', (reason) => {
  // I just caught an unhandled promise rejection,
  // since we already have fallback handler for unhandled errors (see below),
  // let throw and let him handle that
  throw reason;
});
process.on('uncaughtException', (error) => {
  // I just received an error that was never handled, time to handle it and then decide whether a restart is needed
  logger_1.logger.error(error);
  process.exit(1);
});
