import { resolvers, schemas } from '.';

describe('players graphql', () => {
  it('is truthy', () => {
    expect(resolvers).toBeTruthy();
    expect(schemas).toBeTruthy();
  });
});
