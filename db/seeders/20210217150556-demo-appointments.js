'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   const dogs = await queryInterface.sequelize.query('SELECT * from Dogs'); 
   console.log(dogs)
   await queryInterface.bulkInsert('Appointments', [
    {
      dog_id: dogs[0][0].id,
      dog_name: dogs[0][0].dog_name,
      owner_first_name: dogs[0][0].owner_first_name, 
      owner_last_name: dogs[0][0].owner_last_name,
      breed: dogs[0][0].breed,
      service: 'Grooming',
      arrival_date: new Date(2021,7,13,8,0,0),
      depart_date: new Date(2021,7,13,14,30,0),
      cubby: 10,
      breakfast: true,
      breakfast_quant: "2 bags",
      lunch: true, 
      lunch_quant: '1 bag',
      dinner: false, 
      belongings: '',
      special_instructions: 'Full Groom',  
      checked_in: true, 
    },
    {
      dog_id: dogs[0][2].id,
      dog_name: dogs[0][2].dog_name,
      owner_first_name: dogs[0][2].owner_first_name, 
      owner_last_name: dogs[0][2].owner_last_name,
      breed: dogs[0][2].breed,
      service: 'Daycare',
      arrival_date: new Date(2021,7,13,8,0,0),
      depart_date: new Date(2021,7,13,14,30,0),
      cubby: 15,
      breakfast: true,
      breakfast_quant: "1 bag",
      lunch: true, 
      lunch_quant: '1 bag',
      dinner: false, 
      checked_in: true, 
    },
    {
      dog_id: dogs[0][9].id,
      dog_name: dogs[0][9].dog_name,
      owner_first_name: dogs[0][9].owner_first_name, 
      owner_last_name: dogs[0][9].owner_last_name,
      breed: dogs[0][9].breed,
      service: 'Boarding',
      arrival_date: new Date(2021,7,5,8,0,0),
      depart_date: new Date(2021,8,30,14,30,0),
      cubby: 18,
      breakfast: true,
      breakfast_quant: "1 bag",
      lunch: true, 
      lunch_quant: '1 bag',
      dinner: false, 
      checked_in: true, 
    },
    {
      dog_id: dogs[0][6].id,
      dog_name: dogs[0][6].dog_name,
      owner_first_name: dogs[0][6].owner_first_name, 
      owner_last_name: dogs[0][6].owner_last_name,
      breed: dogs[0][6].breed,
      service: 'Boarding',
      arrival_date: new Date(2021,7,6,8,0,0),
      depart_date: new Date(2021,8,30,14,30,0),
      cubby: 30,
      breakfast: true,
      breakfast_quant: "1 bag",
      lunch: true, 
      lunch_quant: '1 bag',
      dinner: false, 
      checked_in: true, 
    },
    {
      dog_id: dogs[0][3].id,
      dog_name: dogs[0][3].dog_name,
      owner_first_name: dogs[0][3].owner_first_name, 
      owner_last_name: dogs[0][3].owner_last_name,
      breed: dogs[0][3].breed,
      service: 'Daycare',
      arrival_date: new Date(2021,7,13,9,0,0),
      depart_date: new Date(2021,7,13,17,30,0),
      cubby: 69,
      belongings:"pokemon collar",
      breakfast: true,
      breakfast_quant: "2 bags",
      lunch: true, 
      lunch_quant: '1 bag',
      dinner: false, 
      morn_meds: true, 
      morn_meds_dir: '1 pill', 
      checked_in: false, 
      checked_out: true,
    },
    {
      dog_id: dogs[0][3].id,
      dog_name: dogs[0][3].dog_name,
      owner_first_name: dogs[0][3].owner_first_name, 
      owner_last_name: dogs[0][3].owner_last_name,
      breed: dogs[0][3].breed,
      service: 'Daycare',
      arrival_date: new Date(2021,3,13,9,0,0),
      depart_date: new Date(2021,3,13,17,30,0),
      cubby: 71,
      belongings:"pokemon collar",
      breakfast: true,
      breakfast_quant: "2 bags",
      lunch: true, 
      lunch_quant: '1 bag',
      dinner: false, 
      morn_meds: true, 
      morn_meds_dir: '1 pill', 
      checked_in: false,
      checked_out: true,  
    },
    {
      dog_id: dogs[0][3].id,
      dog_name: dogs[0][3].dog_name,
      owner_first_name: dogs[0][3].owner_first_name, 
      owner_last_name: dogs[0][3].owner_last_name,
      breed: dogs[0][3].breed,
      service: 'Boarding',
      arrival_date: new Date(2021,5,20,9,0,0),
      depart_date: new Date(2021,5,25,17,30,0),
      cubby: 63,
      belongings:"pokemon collar",
      breakfast: true,
      breakfast_quant: "2 bags",
      lunch: true, 
      lunch_quant: '1 bag',
      dinner: false, 
      morn_meds: false, 
      belongings: 'red blanket', 
      checked_in: false,
      checked_out: true,  
    },
    {
      dog_id: dogs[0][10].id,
      dog_name: dogs[0][10].dog_name,
      owner_first_name: dogs[0][10].owner_first_name, 
      owner_last_name: dogs[0][10].owner_last_name,
      breed: dogs[0][10].breed,
      service: 'Boarding',
      arrival_date: new Date(2021,6,13,16,0,0),
      depart_date: new Date(2021,7,27,17,30,0),
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
      special_instructions: 'Sleep in the office', 
    },
    {
      dog_name: 'Doris',
      owner_first_name: 'Lara', 
      owner_last_name: 'Reynolds',
      breed:'Brussells-Griffon',
      service: 'Grooming',
      arrival_date: new Date(2021,4,6,9,0,0),
      depart_date: new Date(2021,4,6,17,30,0), 
      special_instructions: 'Bath', 
      checked_in: false, 
      new_dog: true, 
    },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Appointments', null, {}); 
  }
};
