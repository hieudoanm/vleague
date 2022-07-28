import { resolvers, schemas } from '.';

describe('fixtures graphql', () => {
  it('is truthy', () => {
    expect(resolvers).toBeTruthy();
    expect(schemas).toBeTruthy();
  });
});
