import axios from 'axios';
import { SERVICE, logInfo } from '@/shared';
// import { getUserStorage } from '@/storage';

const service = axios.create({
  baseURL: SERVICE,
  withCredentials: false,
  timeout: 10000,
});

service.interceptors.request.use(
  (config) => {
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
    let res = response.data;
    if (process.env.NODE_ENV !== 'production') {
      logInfo('@request', `open url: ${response.config.baseURL}`, 'data:', res);
    }

    if (res.code === 200 || res.code === 0) {
      return res;
    } else if (res.code === 201) {
      return Promise.reject(res.msg);
    } else if (res.code === 203 || res.code === 204) {
      setTimeout(() => {
        // router.app.$router.push('/login');
      }, 500);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { service };
