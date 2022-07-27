import { resolvers, typeDefs } from '.';

describe('graphql', () => {
  it('resolvers should be truthy', () => {
    expect(resolvers).toBeTruthy();
  });

  it('typeDefs should be truthy', () => {
    expect(typeDefs).toBeTruthy();
  });
});
