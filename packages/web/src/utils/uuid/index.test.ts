import uuid from './index';

describe('axios', () => {
  describe('get', () => {
    it('success', async () => {
      const id = uuid();
      expect(id).toMatch(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/
      );
    });
  });
});
