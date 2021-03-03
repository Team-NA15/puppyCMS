'use strict';
const {query} = require('express'); 
module.exports = {
  up: async (queryInterface, Sequelize) => {

   const user = await queryInterface.sequelize.query('SELECT * from Users'); 
   const organization = await queryInterface.sequelize.query('SELECT * FROM Organizations'); 
   await queryInterface.bulkInsert('OrgUsers', [
    {
      organization_id: organization[0][0].id, 
      user_id: user[0][0].id
    }, 
    {
      organization_id: organization[0][0].id, 
      user_id: user[0][1].id
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('OrgUsers', null, {}); 
  }
};
