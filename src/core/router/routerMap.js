import React from 'react';
const Home = React.lazy(() => import('@/pages/template/Home')); // 懒加载
const User = React.lazy(() => import('@/pages/template/User')); // 懒加载
export const routerMap = [
  {
    alias: '/',
    pathname: '/',
    name: 'Home',
    component: Home,
  },
  {
    alias: '/User',
    pathname: '/User/:id',
    name: 'User',
    component: User,
  },
];
