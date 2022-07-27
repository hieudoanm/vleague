import { Request, Response } from 'express';
import { notFoundHandler } from '.';

describe('notFoundHandler', () => {
  const mockResponse = (): Response => {
    const response = {} as Response;
    response.status = jest.fn().mockReturnValue(response);
    response.json = jest.fn().mockReturnValue(response);
    return response;
  };

  it('should call status and json', () => {
    const mockedRequest = {} as Request;
    const mockedResponse = mockResponse();
    notFoundHandler(mockedRequest, mockedResponse);

    expect(mockedResponse.status).toBeCalled();
    expect(mockedResponse.json).toBeCalled();
  });
});
