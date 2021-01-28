export function setShowLogin(data) {
  return (dispatch, getState) => {
    console.log(data);
    dispatch({ type: 'SET_SHOW_LOGIN', data: data });
  };
}
