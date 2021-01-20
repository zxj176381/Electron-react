import { setSession, getSession, removeSession } from '@/shared';

const PAGE = 'PAGE'; // 页面数据缓存

export function setPageSession(alias, value) {
  setSession(`${PAGE} - ${alias}`, value);
}

export function getPageSession(alias, clear = false) {
  return getSession(`${PAGE} - ${alias}`, clear);
}

export function removePageSession(alias) {
  removeSession(`${PAGE} - ${alias}`);
}
