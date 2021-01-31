import { setLocal, getLocal, removeLocal } from '@/shared';

const USER_INFO = 'USER_INFO'; // 页面数据缓存

export function setUserInfoLocal(value) {
  setLocal(USER_INFO, value);
}

export function getUserInfoLocal(clear = false) {
  return getLocal(USER_INFO, clear);
}

export function removeUserInfoLocal() {
  removeLocal(USER_INFO);
}
