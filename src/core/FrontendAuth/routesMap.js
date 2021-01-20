import { Home, User } from '@/pages';

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
