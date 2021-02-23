const config = require('../../config/keys'); 

module.exports = {
  "development": {
    "username": config.MYSQL.USER,
    "password": config.MYSQL.PASSWORD,
    "database": `${config.MYSQL.DB_NAME}`,
    "host": config.MYSQL.HOSTNAME,
    "port": config.MYSQL.PORT,
    "dialect": "mysql", 
  },
  "test": {
    "username": config.MYSQL.USER,
    "password": config.MYSQL.PASSWORD,
    "database": `${config.MYSQL.DB_NAME}`,
    "host": config.MYSQL.HOSTNAME,
    "port": config.MYSQL.PORT,
    "dialect": "mysql",
  },
  "production": {
    "username": config.MYSQL.USER,
    "password": config.MYSQL.PASSWORD,
    "database": `${config.MYSQL.DB_NAME}`,
    "host": config.MYSQL.HOSTNAME,
    "port": config.MYSQL.PORT,
    "dialect": "mysql",
  }
}
