'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.DATABASE_URL =
  exports.DATABASE_NAME =
  exports.DATABASE_PASS =
  exports.DATABASE_USER =
  exports.DATABASE_PORT =
  exports.DATABASE_HOST =
  exports.NODE_ENV =
    void 0;
const dotenv_1 = __importDefault(require('dotenv'));
exports.NODE_ENV = process.env.NODE_ENV || 'development';
if (exports.NODE_ENV === 'development') {
  dotenv_1.default.config();
}
exports.DATABASE_HOST = process.env.DATABASE_HOST || 'localhost';
exports.DATABASE_PORT = process.env.DATABASE_PORT || '5432';
exports.DATABASE_USER = process.env.DATABASE_USER || 'username';
exports.DATABASE_PASS = process.env.DATABASE_PASS || 'password';
exports.DATABASE_NAME = process.env.DATABASE_NAME || 'database';
exports.DATABASE_URL =
  process.env.DATABASE_URL ||
  'postgres://username:password@localhost:5432/database';
