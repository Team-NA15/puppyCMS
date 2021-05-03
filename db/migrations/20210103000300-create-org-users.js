'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrgUsers', {
      organization_id: {
        type: Sequelize.UUID, 
        primaryKey: true,
        references: {
          model: {
            tableName: 'Organizations'
          }, 
          key: 'id'
        }
      },
      user_id: {
        type: Sequelize.UUID, 
        primaryKey: true,
        references: {
          model: {
            tableName: 'Users'
          }, 
          key: 'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE, 
        defaultValue: new Date(),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE, 
        defaultValue: new Date(),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OrgUsers');
  }
};