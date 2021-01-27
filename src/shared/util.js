const _hasOwnPrototype = Object.prototype.hasOwnProperty;
// 检测值的类型
function getClass(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
// 检测对象自身属性中是否具有指定的属性
export function hasOwn(obj, key) {
  return _hasOwnPrototype.call(obj, key);
}
// 检测纯粹的对象 Object 类型
export function isPlainObject(obj) {
  return getClass(obj) === 'object';
}
// 检测空 Object 类型
export function isEmptyObject(obj) {
  for (let name in obj) {
    return false;
  }
  return true;
}
// 检测 Function 类型
export function isFn(obj) {
  return getClass(obj) === 'function';
}
// 检测 Array 类型
export function isArray(obj) {
  if (Array.isArray) {
    return Array.isArray(obj);
  } else {
    return obj instanceof Array;
  }
}
// 检测 Undefined 类型
export function isUndef(obj) {
  return obj === void 0;
}
// 检测 String 类型
export function isStr(obj) {
  return typeof obj === 'string';
}
// 检测 Number 类型
export function isNum(value) {
  return !isNaN(value) && typeof value === 'number';
}
// 检测 boolean 类型
export function isBool(value) {
  return typeof value === 'boolean';
}
// 检测为有效值，即 thusly 或等于 0
export function isEffectiveValue(value) {
  return !!value || value === 0;
}
// 模糊手机号信息
export function fuzzyPhone(value) {
  return value.replace(/^\d{3}(\d+)\d{3}$/, (match, $1) => {
    return match.replace($1, '****');
  });
}
// 格式化日期数值
function _formatDateValue(value) {
  return value > 9 ? value : '0' + value;
}
// 获取日期字符串
export function getDateString(date) {
  date = date || new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return (
    year +
    '-' +
    _formatDateValue(month) +
    '-' +
    _formatDateValue(day) +
    ' ' +
    _formatDateValue(hours) +
    ':' +
    _formatDateValue(minutes) +
    ':' +
    _formatDateValue(seconds)
  );
}

// #start 地址信息
const queryParamPattern = /([^&]+)=([^&]+)/;
const invalidQueryValues = ['undefined', 'null'];
/**
 * 序列化地址信息
 * @param {String} url 地址信息
 * @param {Object} params 参数信息
 * @return {String} 拼接完成后的完整地址
 */
export function serializeUrl(url, params, share) {
  let queryString = '';
  if (!url.match(/\?/)) {
    queryString += '?';
  }
  for (let key in params) {
    const value = params[key];
    if (~invalidQueryValues.indexOf(value + '')) {
      continue;
    }
    queryString += `&${key}=${value}`;
  }
  url = url + queryString;
  url = url.replace(/\?&/, '?').replace(/\?$/, '');
  if (share) {
    const prefix = url.match(/\?/) ? '&' : '?';
    url += `${prefix}pagePath=${encodeURIComponent(url)}`;
  }
  return url;
}
// 获取参数
export function getUrlParams(url) {
  const queryIndex = url.indexOf('?');
  if (~queryIndex) {
    const queryString = url.substring(queryIndex + 1);
    const params = {};
    queryString.split('&').forEach((param) => {
      const matches = param.match(queryParamPattern);
      if (matches) {
        const key = matches[1];
        const value = matches[2];
        // 过滤一下无效的值
        if (!~invalidQueryValues.indexOf(value)) {
          params[key] = value;
        }
      }
    });
    return params;
  }
  return;
}
// #end
// 校验是否以 http/https 开头
export function isHttp(path) {
  return /^(http|https):\/\//.test(path);
}
// 拼接分享标题信息
export function joinShareTitle(title, desc) {
  return `${title} - ${desc}`;
}
// 获取路径名称
export function getRelativePagePath(pagePath) {
  // 去尾
  return pagePath.replace(/\?.*/, '');
}
/**
 * 截取用户的名称
 * @param {String} val
 */
export function translateName(val) {
  return decodeURIComponent(val).substr(0, 1) + '**';
}
// 检测是否为有效的数据，主要是兼容芸众返回的数据结构。
export function isEffectiveData(data) {
  let isEffective = false;
  if (isArray(data)) {
    isEffective = !!data.length;
  } else if (isPlainObject(data)) {
    isEffective = true;
  } else {
    isEffective = !!data;
  }
  return isEffective;
}
// 将对象转换为数组，处理部分情况下接口返回的列表数据是对象的问题。
export function transformObjectToArray(data) {
  const result = [];
  if (isPlainObject(data)) {
    const keys = Object.keys(data);
    keys.forEach((key) => {
      result.push(data[key]);
    });
  }
  return result.length ? result : data;
}

// 检查是否是空对象或者空数组，无效值
export function isEmpty(obj) {
  //检验null和undefined
  if (!obj && obj !== 0 && obj !== '') {
    return true;
  }
  //检验数组
  if (Array.prototype.isPrototypeOf(obj) && obj.length === 0) {
    return true;
  }
  //检验对象
  if (Object.prototype.isPrototypeOf(obj) && Object.keys(obj).length === 0) {
    return true;
  }
  // 检查是否是null或者undefined
  if (!obj) {
    return true;
  }
  return false;
}
// 尝试解析 JSON 串
export function parseJsonString(value) {
  try {
    value = JSON.parse(value);
  } catch (ex) {
    value = {
      text: value,
    };
  }
  return value;
}

// 获取当前路由名称
export function getRouteName(isAlias = false) {
  let routeName = window.location.pathname;
  if (isAlias) {
    routeName = `/${routeName.split('/')[1]}`;
  }
  return routeName;
}

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
