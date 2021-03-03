'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Appointments.init({
    dog_id: DataTypes.UUID, 
    dog_name: DataTypes.STRING, 
    last_name: DataTypes.STRING,
    breed: DataTypes.STRING, 
    service: DataTypes.STRING, 
    arrival_date: DataTypes.DATE, 
    depart_date: DataTypes.DATE,
    cubby: DataTypes.INTEGER,  
    breakfast: DataTypes.BOOLEAN, 
    breakfast_quant: DataTypes.STRING, 
    lunch: DataTypes.BOOLEAN, 
    lunch_quant: DataTypes.BOOLEAN, 
    dinner: DataTypes.BOOLEAN, 
    dinner_quant: DataTypes.STRING, 
    morn_meds: DataTypes.BOOLEAN, 
    morn_meds_dir: DataTypes.STRING, 
    noon_meds: DataTypes.BOOLEAN, 
    noon_meds_dir: DataTypes.STRING, 
    night_meds: DataTypes.BOOLEAN, 
    night_meds_dir: DataTypes.STRING, 
    belongings: DataTypes.STRING,
    checked_in: DataTypes.BOOLEAN,
    checked_out: DataTypes.BOOLEAN,
    new_dog: DataTypes.BOOLEAN,   
    cost: DataTypes.DOUBLE, 
  }, {
    sequelize,
    modelName: 'Appointments',
    underscored: true,
  });

  Appointments.beforeCreate((appt, options) => {
    appt.created_at = new Date(); 
    appt.updated_at = new Date(); 
  }); 
  return Appointments;
};