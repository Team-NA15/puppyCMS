'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  appointments.init({
    dog_id: DataTypes.UUID,
    dog_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    breed: DataTypes.STRING,
    service: DataTypes.ENUM,
    arrival_date: DataTypes.DATE,
    depart_date: DataTypes.DATE,
    depart_time: DataTypes.TIME,
    cubby: DataTypes.INTEGER,
    breakfast: DataTypes.BOOLEAN,
    breakfast_quant: DataTypes.STRING,
    lunch: DataTypes.BOOLEAN,
    lunch_quant: DataTypes.STRING,
    dinner: DataTypes.BOOLEAN,
    dinner_quant: DataTypes.STRING,
    morn_meds: DataTypes.BOOLEAN,
    morn_meds_dir: DataTypes.STRING,
    noon_meds: DataTypes.BOOLEAN,
    noon_meds_dir: DataTypes.STRING,
    night_meds: DataTypes.BOOLEAN,
    night_meds_dir: DataTypes.STRING,
    belongings: DataTypes.STRING,
    cost: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'appointments',
    underscored: true,
  });
  return appointments;
};