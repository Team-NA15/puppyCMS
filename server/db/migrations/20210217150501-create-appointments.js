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
            tableName: 'dogs',
          }, 
          key: 'id',
        },
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE',
      },
      dog_name: {
        type: Sequelize.STRING, 
        allowNull: false, 
      },
      last_name: {
        type: Sequelize.STRING, 
        allowNull: false, 
      },
      breed: {
        type: Sequelize.STRING, 
        allowNull: false, 
      },
      service: {
        type: Sequelize.STRING, 
        allowNull: false, 
      },
      arrival_date: {
        type: Sequelize.DATE, 
        allowNull: false,
      },
      depart_date: {
        type: Sequelize.DATE, 
      },
      cubby: {
        type: Sequelize.INTEGER
      },
      breakfast: {
        type: Sequelize.BOOLEAN, 
        defaultValue: false,
      },
      breakfast_quant: {
        type: Sequelize.STRING
      },
      lunch: {
        type: Sequelize.BOOLEAN, 
        defaultValue: false,
      },
      lunch_quant: {
        type: Sequelize.STRING
      },
      dinner: {
        type: Sequelize.BOOLEAN, 
        defaultValue: false,
      },
      dinner_quant: {
        type: Sequelize.STRING
      },
      morn_meds: {
        type: Sequelize.BOOLEAN, 
        defaultValue: false,
      },
      morn_meds_dir: {
        type: Sequelize.STRING
      },
      noon_meds: {
        type: Sequelize.BOOLEAN, 
        defaltValue: false, 
      },
      noon_meds_dir: {
        type: Sequelize.STRING
      },
      night_meds: {
        type: Sequelize.BOOLEAN, 
        defaultValue: false,
      },
      night_meds_dir: {
        type: Sequelize.STRING
      },
      belongings: {
        type: Sequelize.STRING
      },
      checked_in: {
        type: Sequelize.BOOLEAN, 
        defaultValue: false, 
      }, 
      checked_out: {
        type: Sequelize.BOOLEAN, 
        defaultValue: false, 
      },
      new_dog: {
        type: Sequelize.BOOLEAN, 
        defaultValue: false, 
      },
      cost: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('appointments');
  }
};