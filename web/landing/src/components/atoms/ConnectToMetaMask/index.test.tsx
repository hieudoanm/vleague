import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import { render } from '@testing-library/react';
import ConnectToMetaMask from '.';

describe('ConnectToMetaMask', () => {
  test('render default', () => {
    const wrapper = render(
      <ThirdwebWeb3Provider
        connectors={{ injected: {} }}
        supportedChainIds={[1]}
      >
        <ConnectToMetaMask />
      </ThirdwebWeb3Provider>
    );
    expect(wrapper.container).toMatchSnapshot();
  });
});
