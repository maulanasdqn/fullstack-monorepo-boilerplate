import { render } from '@testing-library/react';

import WebComponentsMolecules from './web-components-molecules';

describe('WebComponentsMolecules', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebComponentsMolecules />);
    expect(baseElement).toBeTruthy();
  });
});
