import { render } from '@testing-library/react';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

describe('App', () => {
  const items = [
    {
      key: 'react',
      label: 'Title for test',
      path: '/react',
      breadcrumbs: ['Menu', 'React'],
    },
  ];

  it('should render successfully', () => {
    const { baseElement } = render(
      <StrictMode>
        <BrowserRouter>
          <App menuItems={items} />
        </BrowserRouter>
      </StrictMode>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <StrictMode>
        <BrowserRouter>
          <App menuItems={items} />
        </BrowserRouter>
      </StrictMode>
    );

    expect(getByText(/Title for test/gi)).toBeTruthy();
  });
});
