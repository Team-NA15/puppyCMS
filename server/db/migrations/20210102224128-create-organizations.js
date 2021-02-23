'use strict';
const uuid = require('uuid'); 
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Organizations', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: uuid.v4()
      },
      name: {
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
      admin_id: {
        type: Sequelize.UUID, 
        allowNull: false,
        references: {
          model: {
            tableName: 'Users'
          }, 
          key: 'id'
        }
      },
      routing_number: {
        type: Sequelize.STRING, 
        allowNull: false, 
        defaultValue: '11111111', 
      }, 
      account_number: {
        type: Sequelize.STRING, 
        allowNull: false, 
        defaultValue: '11111111',
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
    await queryInterface.dropTable('Organizations');
  }
};