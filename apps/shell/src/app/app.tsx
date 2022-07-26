import { Route, Routes } from 'react-router-dom';
import { Breadcrumb, Layout, Card } from 'antd';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './app.css';
import { loadRemoteModule } from '../utils/dynamic-mfe';

import { toUpperCase } from '@monorepo-nx-react-mfe/utils';

const HeaderModule = React.lazy(() => loadRemoteModule('header', './Module'));
const ReactModule1 = React.lazy(() =>
  loadRemoteModule('react-module-1', './Module')
);
const ReactModule2 = React.lazy(() =>
  loadRemoteModule('react-module-2', './Module')
);

const { Footer } = Layout;

const items: IMenuItem[] = [
  {
    key: 'module1',
    label: toUpperCase('Module 1'),
    path: '/module1',
    breadcrumbs: ['Menu', 'Module 111'],
  },
  {
    key: 'module2',
    label: toUpperCase('Module 2'),
    path: '/module2',
    breadcrumbs: ['Menu', 'Module 2'],
  },
];

export interface ErrorFallbackProps {
  error: Error;
}

export interface IMenuItem {
  key: string;
  label: string;
  path: string;
  breadcrumbs: string[];
}

const ErrorFallback = ({ error }: ErrorFallbackProps) => (
  <Card title={'An unexpected error has occurred'}>{error.message}</Card>
);

const renderModule = (key: string) => {
  switch (key) {
    case 'module2':
      return <ReactModule2 />;
    default:
      return <ReactModule1 />;
  }
};

const renderRoute = (menuItem: IMenuItem) => (
  <Route
    key={menuItem.key}
    path={menuItem.path}
    element={
      <>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {menuItem.breadcrumbs.map((bci) => (
            <Breadcrumb.Item key={menuItem.key + bci}>
              {toUpperCase(bci)}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<h1>Loading {menuItem.label}...</h1>}>
            {renderModule(menuItem.key)}
          </Suspense>
        </ErrorBoundary>
      </>
    }
  />
);

const App: React.FC = () => {
  return (
    <Layout>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<h1>Loading Header...</h1>}>
          <HeaderModule menuItems={items} />
        </Suspense>
      </ErrorBoundary>
      <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Routes>
            {renderRoute({
              ...items[0],
              path: '*',
              breadcrumbs: ['Menu', 'Home'],
            })}
            <>{items.map((item) => renderRoute(item))}</>
          </Routes>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Monorepo MFE - NX ©2022</Footer>
    </Layout>
  );
};

export default App;
