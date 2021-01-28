import { combineReducers } from 'redux';
import defaultState from './state';

function isShowLogin(state = defaultState.isShowLogin, action) {
  switch (action.type) {
    case 'SET_SHOW_LOGIN':
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  isShowLogin,
});
