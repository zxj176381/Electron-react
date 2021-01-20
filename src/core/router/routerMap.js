import Home from '@/pages/template/Home';
import User from '@/pages/template/User';

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
