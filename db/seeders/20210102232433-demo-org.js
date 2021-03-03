'use strict';
const {query} = require('express'); 
module.exports = {
  up: async (queryInterface, Sequelize) => {

   const users = await queryInterface.sequelize.query('SELECT * FROM Users'); 
   await queryInterface.bulkInsert('Organizations', [
     {
       name: 'Playful Pups', 
       address: '2301 Airport Thruway', 
       phone_number: '706-327-2227', 
       admin_id: users[0][0].id
     }, 
   ])
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Organizations', null, {}); 
  }
};
