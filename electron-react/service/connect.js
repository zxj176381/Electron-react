const MySQL = require('mysql');
const connection = MySQL.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'test',
});

connection.connect();

module.exports = {
  connection,
};
