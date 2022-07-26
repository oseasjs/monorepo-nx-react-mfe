import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

const items = [
  {
    key: 'react',
    label: 'React from Header',
    path: '/react',
    breadcrumbs: ['Menu', 'React'],
  },
  {
    key: 'angular',
    label: 'Angular',
    path: '/angular',
    breadcrumbs: ['Menu', 'Angular'],
  },
  { key: 'vue', label: 'Vue', path: '/Vue', breadcrumbs: ['Menu', 'Vue'] },
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App menuItems={items} />
    </BrowserRouter>
  </StrictMode>
);
