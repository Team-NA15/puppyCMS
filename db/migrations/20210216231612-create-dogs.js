'use strict';
const uuid = require('uuid'); 
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dogs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: uuid.v4(), 
      },
      name: {
        type: Sequelize.STRING
      },
      owner_first_name: {
        type: Sequelize.STRING
      },
      owner_last_name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      breed: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.INTEGER
      },
      age: {
        type: Sequelize.STRING,
      },
      neutered_spayed: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Dogs');
  }
};