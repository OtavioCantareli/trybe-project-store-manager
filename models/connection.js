const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'store_manager_db',
  user: 'root',
  password: 'password',
  database: 'StoreManager',
});

module.exports = connection;