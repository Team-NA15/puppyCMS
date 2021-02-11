'use strict';
const {
  Model
} = require('sequelize');
const uuid = require('uuid'); 
module.exports = (sequelize, DataTypes) => {
  class Organizations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Organizations.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    admin_id: {
      type: DataTypes.UUID,
      allowNull: false
    }, 
    routing_number: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    account_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Organizations',
    underscored: true,
  });
  Organizations.beforeCreate((organization, options) => {
    organization.id = uuid.v4(); 
  })

  Organizations.associate = models => {
    Organizations.belongsTo(models.Users, {
      foreignKey: 'admin_id', 
      targetKey: 'id' 
    });  

    Organizations.belongsToMany(models.Users, {
      through: 'OrgUsers', 
      as: 'OrgMembers'
    })

  }
  return Organizations;
};