import { service } from '@/service';

export function getMenuListService() {
  return service({
    url: '/',
    method: 'GET',
  });
}

export function loginService(data) {
  return service({
    url: '/login',
    method: 'POST',
    data,
    showDialog: true,
  });
}
