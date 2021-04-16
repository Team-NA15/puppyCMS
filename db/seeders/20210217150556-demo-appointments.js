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
      arrival_date: new Date(2021,3,16,8,0,0),
      depart_date: new Date(2021,4,24,14,30, 0),
      cubby: 10,
      breakfast: true,
      breakfast_quant: "2 bags",
      lunch: true, 
      lunch_quant: '1 bag',
      dinner: false, 
      belongings:"gucci bag, gucci bed,gucci blanket", 
      checked_in: true, 
    },
    {
      dog_id: dogs[0][3].id,
      dog_name: 'Dro',
      owner_last_name: 'Corn',
      breed:'G. Shep',
      service: 'Daycare',
      arrival_date: new Date(2021,3,16,9,0,0),
      depart_date: new Date(2021,4,27,17,30,0),
      cubby: 63,
      belongings:"pokemon collar",
      breakfast: true,
      breakfast_quant: "2 bags",
      lunch: true, 
      lunch_quant: '1 bag',
      dinner: false, 
      morn_meds: true, 
      morn_meds_dir: '1 pill', 
      belongings: 'red blanket', 
      checked_in: true, 
    },
    {
      dog_id: dogs[0][4].id,
      dog_name: 'Romeo',
      owner_last_name: 'Corn',
      breed:'Mini Aussie',
      service: 'Boarding',
      arrival_date: new Date(2021,3,13,16,0,0),
      depart_date: new Date(2021,4,27,17,30,0),
      cubby: 12,
      belongings:"",
      breakfast: true,
      breakfast_quant: '1 bag',
      lunch: true, 
      lunch_quant: '1 bag',
      dinner: true,
      dinner_quant: '1 bag',
      night_meds: true, 
      night_meds_dir: 'spray pads',
      belongings: 'brown blanket with paws', 
      checked_in: true, 
    },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Appointments', null, {}); 
  }
};
