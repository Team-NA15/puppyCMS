'use strict';
const uuid = require('uuid'); 
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID, 
        defaultValue: uuid.v4()
      },
      email: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      first_name: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      role: {
        type: Sequelize.ENUM, 
        allowNull: false,
        values: ['admin', 'manager', 'senior associate', 'associate']
      },
      routing_number: {
        type: Sequelize.STRING, 
        allowNull: true
      }, 
      account_number: {
        type: Sequelize.STRING, 
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE, 
        defaultValue: new Date() 
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE, 
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};