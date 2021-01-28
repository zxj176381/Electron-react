import React from 'react';
const Login = React.lazy(() => import('@/pages/Login'));
const Layout = React.lazy(() => import('@/pages/Layout'));
export const routerMap = [
  {
    alias: '/',
    pathname: '/',
    name: 'Layout',
    component: Layout,
  },
  {
    alias: '/login',
    pathname: '/login',
    name: 'Login',
    component: Login,
  },
];
