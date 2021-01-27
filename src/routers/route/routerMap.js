import React from 'react';
const User = React.lazy(() => import('@/pages/template/User'));
const Layout = React.lazy(() => import('@/pages/Layout'));
export const routerMap = [
  {
    alias: '/',
    pathname: '/',
    name: 'Layout',
    component: Layout,
  },
  {
    alias: '/User',
    pathname: '/User/:id',
    name: 'User',
    component: User,
  },
];
