import axios from 'axios';
import qs from 'qs';
import { SERVICE, logInfo, getClass } from '@/shared';
import { message } from 'antd';

const service = axios.create({
  baseURL: SERVICE,
  withCredentials: false,
  timeout: 10000,
  transformRequest: [
    function (data) {
      if (getClass(data) !== 'formdata') {
        return qs.stringify(data);
      }
      return data;
    },
  ],
});

service.interceptors.request.use(
  (config) => {
    if (config.withToken) config.headers.token = 'token';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 响应拦截器
 */
service.interceptors.response.use(
  (response) => {
    const { config, data } = response;
    let result = data;
    if (process.env.NODE_ENV !== 'production') {
      logInfo('@request', `open url: ${config.baseURL}`, 'data:', result);
    }

    if (result.code === 200) {
      return result;
    } else if (result.code === 500) {
      if (config.showDialog) {
        message.error(result.msg);
      }
      return result;
    } else if (result.code === 400) {
      message.warning('请登录后尝试');
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { service };
