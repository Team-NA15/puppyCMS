'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   const dogs = await queryInterface.sequelize.query('SELECT * from Dogs'); 
   console.log(dogs)
   await queryInterface.bulkInsert('Appointments', [
    {
      dog_id: dogs[0][0].id,
      dog_name: 'Roscoe',
      owner_last_name: 'Johnson',
      breed:'Yorkie',
      service: 'Grooming',
      arrival_date: new Date(),
      depart_date: new Date(2021,2,24,14,30, 0),
      cubby: 12,
      belongings:"gucci bag, gucci bed,gucci blanket"
    },
    {
      dog_id: dogs[0][1].id,
      dog_name: 'Dro',
      owner_last_name: 'Corn',
      breed:'G. Shep',
      service: 'Daycare',
      arrival_date: new Date(),
      depart_date: new Date(2021,2,27,17,30,0),
      cubby: 10,
      belongings:"pokemon collar",
      breakfast: true,
      breakfast_quant: "2 bags"

    },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Appointments', null, {}); 
  }
};
