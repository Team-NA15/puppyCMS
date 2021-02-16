'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dog_id: {
        type: Sequelize.UUID, 
        references: {
          model: {
            tableName: 'Dog',
          }, 
          key: 'id',
        },
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE',
      },
      dog_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      breed: {
        type: Sequelize.STRING
      },
      service: {
        type: Sequelize.STRING
      },
      arrival_date: {
        type: Sequelize.DATE
      },
      depart_date: {
        type: Sequelize.DATE
      },
      depart_time: {
        type: Sequelize.TIME
      },
      cubby: {
        type: Sequelize.INTEGER
      },
      breakfast: {
        type: Sequelize.BOOLEAN
      },
      breakfast_quant: {
        type: Sequelize.STRING
      },
      lunch: {
        type: Sequelize.BOOLEAN
      },
      lunch_quant: {
        type: Sequelize.STRING
      },
      dinner: {
        type: Sequelize.BOOLEAN
      },
      dinner_quant: {
        type: Sequelize.STRING
      },
      morn_meds: {
        type: Sequelize.BOOLEAN
      },
      morn_meds_dir: {
        type: Sequelize.STRING
      },
      noon_meds: {
        type: Sequelize.BOOLEAN
      },
      noon_meds_dir: {
        type: Sequelize.STRING
      },
      night_meds: {
        type: Sequelize.BOOLEAN
      },
      night_meds_dir: {
        type: Sequelize.STRING
      },
      belongings: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.DOUBLE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('appointments');
  }
};