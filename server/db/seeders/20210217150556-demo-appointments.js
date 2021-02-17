'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   const dogs = await queryInterface.sequelize.query('SELECT * from dogs'); 
   console.log(dogs)
   await queryInterface.bulkInsert('appointments', [
    {
      dog_id: dogs[0][0].id,
      dog_name: 'Roscoe',
      last_name: 'Johnson',
      breed:'Yorkie',
      service: 'Grooming',
      arrival_date: new Date(),
      cubby: 12,
      belongings:"gucci bag, gucci bed,gucci blanket"
    },
    {
      dog_id: dogs[0][1].id,
      dog_name: 'Dro',
      last_name: 'Corn',
      breed:'G. Shep',
      service: 'Daycare',
      arrival_date: new Date(),
      cubby: 10,
      belongings:"pokemon collar",
      breakfast: true,
      breakfast_quant: "2 bags"

    },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('appointments', null, {}); 
  }
};
