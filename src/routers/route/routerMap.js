import React from 'react';
const Layout = React.lazy(() => import('@/pages/Layout'));
export const routerMap = [
  {
    alias: '/',
    pathname: '/',
    name: 'Layout',
    component: Layout,
  },
];
