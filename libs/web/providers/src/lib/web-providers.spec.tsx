import { render } from '@testing-library/react';

import WebProviders from './web-providers';

describe('WebProviders', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebProviders />);
    expect(baseElement).toBeTruthy();
  });
});
