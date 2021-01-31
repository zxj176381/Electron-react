import { combineReducers } from 'redux';
import { setUserInfoLocal } from '@/storage';
import defaultState from './state';

// 自动登录
function isAutoLogin(state = defaultState.isAutoLogin, action) {
  switch (action.type) {
    case 'SET_AUTO_LOGIN':
      return action.data;
    default:
      return state;
  }
}

// 登录框
function isShowLogin(state = defaultState.isShowLogin, action) {
  switch (action.type) {
    case 'SET_SHOW_LOGIN':
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  isAutoLogin,
  isShowLogin,
});
