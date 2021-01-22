var { UNSUCCESS_CODE, SUCCESS_CODE } = require('./constants');

function successInfo(data) {
  return {
    result: SUCCESS_CODE,
    data,
  };
}

function errorInfo(data) {
  return {
    result: UNSUCCESS_CODE,
    data,
  };
}

module.exports = {
  successInfo,
  errorInfo,
};
