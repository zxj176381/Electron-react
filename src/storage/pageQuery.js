import { getRouteName } from '@/shared';
import { getPageSession } from './session';

/**
 * 获取页面传递参数
 */
export function getRouteQuery() {
  const routeName = getRouteName();
  const options = getPageSession(routeName);
  return options;
}
