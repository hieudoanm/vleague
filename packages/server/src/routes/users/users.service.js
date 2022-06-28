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
exports.createUser = exports.getUser = void 0;
const postgre_1 = require('../../libs/postgre');
const users_entity_1 = require('./users.entity');
const uuid_1 = require('uuid');
const uuid = (email) => {
  return (0, uuid_1.v5)(email, (0, uuid_1.v4)());
};
const getUser = (email) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = yield (0, postgre_1.getRepository)(
      users_entity_1.UserEntity
    );
    const user = yield userRepository.findOne({
      where: { email },
    });
    return { user };
  });
exports.getUser = getUser;
const createUser = (email) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = yield (0, postgre_1.getRepository)(
      users_entity_1.UserEntity
    );
    const newUser = new users_entity_1.UserEntity();
    newUser.email = email;
    newUser.key = uuid(email);
    const savedUser = yield userRepository.save(newUser);
    return { user: savedUser };
  });
exports.createUser = createUser;
