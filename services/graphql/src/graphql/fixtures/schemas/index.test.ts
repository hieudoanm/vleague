import { schemas } from '.';

describe('fixtures schemas', () => {
  it('should match snapshot', () => {
    expect(schemas).toMatchSnapshot();
  });
});
