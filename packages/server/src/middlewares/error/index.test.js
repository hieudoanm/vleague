'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const tsoa_1 = require('tsoa');
const _1 = require('.');
describe('errorHandler', () => {
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };
  it('should return error', () => {
    const error = new Error('error message');
    const mockedRequest = {};
    const mockedResponse = mockResponse();
    const nextFunction = jest.fn();
    (0, _1.errorHandler)(error, mockedRequest, mockedResponse, nextFunction);
    expect(mockedResponse.status).toBeCalled();
    expect(mockedResponse.json).toBeCalled();
  });
  it('should return validate error', () => {
    const error = new tsoa_1.ValidateError({}, 'error message');
    const mockedRequest = {};
    const mockedResponse = mockResponse();
    const nextFunction = jest.fn();
    (0, _1.errorHandler)(error, mockedRequest, mockedResponse, nextFunction);
    expect(mockedResponse.status).toBeCalled();
    expect(mockedResponse.json).toBeCalled();
  });
  it('should continue', () => {
    const mockedRequest = {};
    const mockedResponse = mockResponse();
    const nextFunction = jest.fn();
    (0, _1.errorHandler)(
      undefined,
      mockedRequest,
      mockedResponse,
      nextFunction
    );
    expect(nextFunction).toBeCalled();
  });
});
