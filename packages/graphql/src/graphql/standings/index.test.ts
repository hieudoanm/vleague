import { resolvers, schemas } from '.';

describe('standings graphql', () => {
  it('is truthy', () => {
    expect(resolvers).toBeTruthy();
    expect(schemas).toBeTruthy();
  });
});
