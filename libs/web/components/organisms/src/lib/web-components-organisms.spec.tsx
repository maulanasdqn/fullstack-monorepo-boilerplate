import { render } from '@testing-library/react';

import WebComponentsOrganisms from './web-components-organisms';

describe('WebComponentsOrganisms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebComponentsOrganisms />);
    expect(baseElement).toBeTruthy();
  });
});
