import logger from './index';

describe('logger', () => {
  it('log debug', async () => {
    logger.debug('debug');
  });

  it('log error', async () => {
    logger.error('error');
  });

  it('log info', async () => {
    logger.info('info');
  });
});
