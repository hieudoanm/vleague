import ConnectToPhantom from '.';
import { render } from '@testing-library/react';

describe('ConnectToPhantom', () => {
  test('render default', () => {
    const wrapper = render(<ConnectToPhantom />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
