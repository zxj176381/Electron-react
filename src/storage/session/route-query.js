import { setSession, getSession, removeSession, getRouteName } from '@/shared';

const ROUTE_QUERY = 'ROUTE_QUERY'; // 跳转传参

export function setRouteQuerySession(value) {
  const routeName = getRouteName();
  setSession(`${ROUTE_QUERY} - ${routeName}`, value);
}

export function getRouteQuerySession(clear = false) {
  const routeName = getRouteName();
  return getSession(`${ROUTE_QUERY} - ${routeName}`, clear);
}

export function removeRouteQuerySession() {
  const routeName = getRouteName();
  removeSession(`${ROUTE_QUERY} - ${routeName}`);
}
