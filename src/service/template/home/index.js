import { service } from '@/service';

export function getUserListService() {
  return service({
    url: '/',
  });
}

export function addUserService() {
  return service({
    url: '/add',
    method: 'POST',
  });
}
