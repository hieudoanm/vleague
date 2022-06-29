import { resolvers, schemas } from '.';

describe('teams graphql', () => {
  it('is truthy', () => {
    expect(resolvers).toBeTruthy();
    expect(schemas).toBeTruthy();
  });
});
