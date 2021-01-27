import { service } from '@/service';

export function getMenuListService() {
  return service({
    path: '/',
    methods: 'GET',
  });
}
