import { render } from '@testing-library/react';

import WebComponentsAtoms from './web-components-atoms';

describe('WebComponentsAtoms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebComponentsAtoms />);
    expect(baseElement).toBeTruthy();
  });
});
