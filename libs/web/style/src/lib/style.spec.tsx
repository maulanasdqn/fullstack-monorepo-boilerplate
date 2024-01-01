import { render } from '@testing-library/react';

import Style from './style';

describe('Style', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Style />);
    expect(baseElement).toBeTruthy();
  });
});
