import { logInfo } from './log';
import { ENV_NAME } from './constants';
import { isStr } from './util';

// 通过添加后缀来隔离不通环境的本地缓存
const addEnvSuffix = function (value) {
  return ENV_NAME ? `${value}--${ENV_NAME}` : value;
};

/**
 * 设置当前页面缓存
 * @param {String} key 本地缓存中指定的 key
 * @param {Any} value 需要存储的内容
 */
export function setSession(key, value) {
  key = addEnvSuffix(key);
  if (process.env.NODE_ENV !== 'production') {
    logInfo('@storage', 'setStorageSync', key);
  }
  if (!isStr(value)) {
    value = JSON.stringify(value);
  }
  sessionStorage.setItem(key, value);
}

/**
 * 获取当前页面缓存
 * @param {String} key 本地缓存中指定的 key
 * @param {Boolean} remove 是否立即移除指定 key 的本地缓存内容
 */
export function getSession(key, remove) {
  key = addEnvSuffix(key);
  let value = sessionStorage.getItem(key);
  value = JSON.parse(value);
  if (process.env.NODE_ENV !== 'production') {
    logInfo('@storage', 'getStorageSync', key);
  }
  if (remove) {
    sessionStorage.removeItem(key);
  }
  return value;
}

/**
 * 从当前页面缓存中移除指定 key
 * @param {String} key 本地缓存中指定的 key
 */
export function removeSession(key) {
  key = addEnvSuffix(key);
  if (process.env.NODE_ENV !== 'production') {
    logInfo('@storage', 'removeStorageSync', key);
  }
  sessionStorage.removeItem(key);
}

/**
 * 设置本地缓存
 * @param {String} key 本地缓存中指定的 key
 * @param {Any} value 需要存储的内容
 */
export function setLocal(key, value) {
  key = addEnvSuffix(key);
  if (process.env.NODE_ENV !== 'production') {
    logInfo('@storage', 'setStorageSync', key);
  }
  localStorage.setItem(key, value);
}

/**
 * 获取本地缓存
 * @param {String} key 本地缓存中指定的 key
 * @param {Boolean} remove 是否立即移除指定 key 的本地缓存内容
 */
export function getLocal(key, remove) {
  key = addEnvSuffix(key);
  const value = localStorage.getItem(key);
  if (process.env.NODE_ENV !== 'production') {
    logInfo('@storage', 'getStorageSync', key);
  }
  if (remove) {
    localStorage.removeItem(key);
  }
  return value;
}

/**
 * 从本地缓存中移除指定 key
 * @param {String} key 本地缓存中指定的 key
 */
export function removeLocal(key) {
  key = addEnvSuffix(key);
  if (process.env.NODE_ENV !== 'production') {
    logInfo('@storage', 'removeStorageSync', key);
  }
  localStorage.removeItem(key);
}
