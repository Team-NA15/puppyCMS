const config = require('../../config/keys'); 
const Sequelize = require('../../../node_modules/Sequelize'); 

module.exports = {
  "development": {
    "username": config.MYSQL.USER,
    "password": config.MYSQL.PASSWORD,
    "database": `${config.MYSQL.DB_NAME}`,
    "host": config.MYSQL.HOSTNAME,
    "port": config.MYSQL.PORT,
    "dialect": "mysql",
    retry: {
      match: [
          Sequelize.ConnectionError,
          Sequelize.ConnectionTimedOutError,
          Sequelize.TimeoutError,
          Sequelize.DatabaseError,
          /Deadlock/i,
          'SQLITE_BUSY'],
      max: config.MYSQL.QUERY_MAX_RETRIES, 
    },  
  },
  "test": {
    "username": config.MYSQL.USER,
    "password": config.MYSQL.PASSWORD,
    "database": `${config.MYSQL.DB_NAME}`,
    "host": config.MYSQL.HOSTNAME,
    "port": config.MYSQL.PORT,
    "dialect": "mysql",
    retry: {
      match: [
          Sequelize.ConnectionError,
          Sequelize.ConnectionTimedOutError,
          Sequelize.TimeoutError,
          Sequelize.DatabaseError,
          /Deadlock/i,
          'SQLITE_BUSY'],
      max: config.MYSQL.QUERY_MAX_RETRIES, 
    },
  },
  "production": {
    "username": config.MYSQL.USER,
    "password": config.MYSQL.PASSWORD,
    "database": `${config.MYSQL.DB_NAME}`,
    "host": config.MYSQL.HOSTNAME,
    "port": config.MYSQL.PORT,
    "dialect": "mysql",
    retry: {
      match: [
          Sequelize.ConnectionError,
          Sequelize.ConnectionTimedOutError,
          Sequelize.TimeoutError,
          Sequelize.DatabaseError,
          /Deadlock/i,
          'SQLITE_BUSY'],
      max: config.MYSQL.QUERY_MAX_RETRIES, 
    },
  }
}
