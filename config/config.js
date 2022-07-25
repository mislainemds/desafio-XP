require('dotenv').config();

const options = {
  "development": {
    "username": process.env.MYSQL_USER || 'root',
    "password": process.env.MYSQL_PASSWORD || '1234',
    "database": process.env.MYSQL_DB_NAME,
    "host": process.env.MYSQL_HOST || 'localhost',
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.MYSQL_USER || 'root',
    "password": process.env.MYSQL_PASSWORD || '1234',
    "database": process.env.MYSQL_DB_NAME,
    "host": process.env.MYSQL_HOST || 'localhost',
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MYSQL_USER || 'root',
    "password": process.env.MYSQL_PASSWORD || '1234',
    "database": process.env.MYSQL_DB_NAME,
    "host": process.env.MYSQL_HOST || 'localhost',
    "dialect": "mysql"
  }
}

module.exports = {
  ...options
}
