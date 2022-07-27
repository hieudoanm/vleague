import { resolvers, schemas } from '.';

describe('users graphql', () => {
  it('is truthy', () => {
    expect(resolvers).toBeTruthy();
    expect(schemas).toBeTruthy();
  });
});
