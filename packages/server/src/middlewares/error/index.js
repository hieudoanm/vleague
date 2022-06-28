'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.errorHandler = void 0;
const tsoa_1 = require('tsoa');
const errorHandler = (error, _request, response, next) => {
  if (error instanceof tsoa_1.ValidateError) {
    return response.status(422).json({
      message: 'Validation Failed',
      details: error.fields,
    });
  }
  if (error instanceof Error) {
    return response.status(500).json({
      message: 'Internal Server Error',
    });
  }
  next();
};
exports.errorHandler = errorHandler;
