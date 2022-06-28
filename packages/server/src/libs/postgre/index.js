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
Object.defineProperty(exports, '__esModule', { value: true });
exports.getRepository = exports.getDataSource = void 0;
require('reflect-metadata');
const typeorm_1 = require('typeorm');
const configs_1 = require('../../configs');
const users_entity_1 = require('../../routes/users/users.entity');
let postgresDataSource = null;
const getDataSource = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    if (postgresDataSource !== null) {
      return postgresDataSource;
    }
    const databaseURL = configs_1.DATABASE_URL.replace('postgres://', '');
    const [usernamePassword = '', hostPortDatabase = ''] =
      databaseURL.split('@');
    const [
      username = configs_1.DATABASE_USER,
      password = configs_1.DATABASE_PASS,
    ] = usernamePassword.split(':');
    const [hostPort = '', database = configs_1.DATABASE_NAME] =
      hostPortDatabase.split('/');
    const [host = configs_1.DATABASE_HOST, port = configs_1.DATABASE_PORT] =
      hostPort.split(':');
    console.info('getDataSource', { host, port, username, password, database });
    postgresDataSource = new typeorm_1.DataSource({
      type: 'postgres',
      host,
      port: parseInt(port, 10),
      username,
      password,
      database,
      schema: 'vleague',
      entities: [users_entity_1.UserEntity],
      synchronize: false,
      logging: false,
      ssl: {
        rejectUnauthorized: false,
      },
    });
    yield postgresDataSource.initialize();
    console.info('initialized');
    return postgresDataSource;
  });
exports.getDataSource = getDataSource;
const getRepository = (entity) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const dataSource = yield (0, exports.getDataSource)();
    return dataSource.getRepository(entity);
  });
exports.getRepository = getRepository;
