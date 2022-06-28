'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.notFoundHandler = void 0;
const notFoundHandler = (_request, response) => {
  return response.status(404).json({ message: 'Not Found' });
};
exports.notFoundHandler = notFoundHandler;
