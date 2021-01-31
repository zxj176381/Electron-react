// 登录框
export function setShowLogin(data) {
  return (dispatch, getState) => {
    dispatch({ type: 'SET_SHOW_LOGIN', data: data });
  };
}

// 自动登录
export function setAutoLogin(data) {
  return (dispatch, getState) => {
    dispatch({ type: 'AUTO_LOGIN', data: data });
  };
}
