const envNameMap = {
  development: 'dev',
  production: '',
};

export const APP_NAME = 'Electron-React';
export const ENV_NAME = envNameMap[process.env.NODE_ENV];
