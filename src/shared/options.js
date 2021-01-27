// 前端约定的网络请求响应状态码
export const responseStatusMap = {
  SUCCESS: 200, // 请求成功且操作成功，对应 request 方法的 success 回调。
  FAIL: 500, // 请求成功但操作失败，对应 request 方法的 success 回调。
  UN_ACCESS: 401, // 用户无访问权限，通常原因是未登录。
};
