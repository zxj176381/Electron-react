import { isStr, getUrlParams, getRelativePagePath } from './util';

/**
 * 跳转到指定页面
 * @param {ComponentProps} props 组件 props 值
 * @param {String} url 跳转的路径名称
 * @param {Object} query 跳转携带的参数
 */
export function navigateTo(props, url, query) {
  const urlQuery = getUrlParams(url);
  const pathname = getRelativePagePath(url);
  const options = {
    pathname,
    query: {
      ...query,
      ...urlQuery,
    },
  };
  props.history.push(options);
}
