'use strict';
const jwt = require('jsonwebtoken'); 
const uuid = require('uuid'); 
const config = require('../../config/keys'); 
const encryptPassword = require('../../util/encrypt'); 

module.exports = {
  up: async (queryInterface, Sequelize) => {
   const check = parseInt(config.SALT); 
   const password = await encryptPassword('password', check); 
   const newID = () => uuid.v4(); 
   await queryInterface.bulkInsert('Users', [  
  {
    id: newID(), 
    email: 'charlie_day@gmail.com', 
    password, 
    first_name: 'charlie', 
    last_name: 'day', 
    address: "patty's pub", 
    phone_number: '495-584-2940', 
    role: 'manager', 
    created_at: new Date(), 
    updated_at: new Date()
  }, 
  {
    id: newID(),  
    email: 'dro_guapo@gmail.com', 
    password, 
    first_name: 'dro', 
    last_name: 'guapo', 
    address: "Denver, Colorado", 
    phone_number: '495-584-2940', 
    role: 'senior associate', 
    created_at: new Date(), 
    updated_at: new Date()
  }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {}); 
  }
};
