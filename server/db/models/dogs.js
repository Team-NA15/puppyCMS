'use strict';
const uuid = require('uuid'); 
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dogs.init({
    name: DataTypes.STRING,
    owner_first_name: DataTypes.STRING,
    owner_last_name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    color: DataTypes.STRING,
    breed: DataTypes.STRING,
    gender: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    age: DataTypes.STRING,
    neutered_spayed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'dogs',
  });


  dogs.beforeCreate((dog, options) => {
    dog.id = uuid.v4(); 
    dog.created_at = new Date(); 
    dog.updated_at = new Date(); 
  })

  dogs.beforeUpdate((dog, options) => {
    dog.updated_at = new Date(); 
  })

  dogs.associate = models => {
    dogs.hasMany(models.appointments, {
      foreignKey: 'dog_id'
    }); 
  }



  return dogs;
};