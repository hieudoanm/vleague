'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const _1 = require('.');
describe('notFoundHandler', () => {
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };
  it('should call status and json', () => {
    const mockedRequest = {};
    const mockedResponse = mockResponse();
    (0, _1.notFoundHandler)(mockedRequest, mockedResponse);
    expect(mockedResponse.status).toBeCalled();
    expect(mockedResponse.json).toBeCalled();
  });
});
