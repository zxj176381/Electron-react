const { connection } = require('./connect');
const { successInfo, errorInfo } = require('./utils');

function inquireTable(inquireIF) {
  return new Promise((resolve, reject) => {
    connection.query(inquireIF, (err, result) => {
      if (err) {
        const error = errorInfo('未找到数据');
        resolve(error);
      }
      const success = successInfo(result);
      resolve(success);
    });
  });
}

module.exports = {
  inquireTable,
};
