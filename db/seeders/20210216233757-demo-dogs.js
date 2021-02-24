'use strict';
const uuid = require('uuid'); 
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Dogs', [
      {
        id: uuid.v4(), 
        name: 'Roscoe', 
        owner_first_name: 'Fred', 
        owner_last_name: 'Johnson', 
        address: '12345 bouldercrest rd', 
        city: 'East Atlanta Zone 6', 
        state: 'Georgia', 
        zip: '30288', 
        color: 'red', 
        breed: 'yorkie', 
        weight: 25, 
        age: '13',
        gender: 'male', 
        neutered_spayed: false,
      }, 
      {
        id: uuid.v4(), 
        name: 'Tibby', 
        owner_first_name: 'Ted', 
        owner_last_name: 'Bundy', 
        address: '900 Hazen St', 
        city: 'New York', 
        state: 'New York', 
        zip: '83210', 
        color: 'black/white', 
        breed: 'pit', 
        weight: 85, 
        age: '4', 
        gender: 'female',
        neutered_spayed: true,
      }, 
      {
        id: uuid.v4(), 
        name: 'Dro', 
        owner_first_name: 'Brandon', 
        owner_last_name: 'Corn', 
        address: '4225 University Ave', 
        city: 'Columbus', 
        state: 'Georgia', 
        zip: '31909', 
        color: 'black/brown', 
        breed: 'german shephard', 
        gender: 'male',
        weight: 80, 
        age: '11', 
        neutered_spayed: false,
      }, 
      {
        id: uuid.v4(), 
        name: 'Tabi', 
        owner_first_name: 'Maya', 
        owner_last_name: 'Mahone', 
        address: '12345 happy ave', 
        city: 'Columbus', 
        state: 'Georgia', 
        zip: '31905', 
        color: 'black/white/brown/grey', 
        breed: 'cattle dog', 
        weight: 50, 
        age: '7 months',
        gender: 'female', 
        neutered_spayed: false,
      }, 
  ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Dogs', null, {}); 
  }
};
