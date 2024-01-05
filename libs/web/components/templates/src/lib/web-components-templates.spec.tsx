import { render } from '@testing-library/react';

import WebComponentsTemplates from './web-components-templates';

describe('WebComponentsTemplates', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebComponentsTemplates />);
    expect(baseElement).toBeTruthy();
  });
});
