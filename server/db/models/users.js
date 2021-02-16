'use strict';
const {
  Model, UUID
} = require('sequelize');
const uuid = require('uuid'); 
const jwt = require('jsonwebtoken'); 
const config = require('../../config/keys'); 
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM, 
      values: ['admin', 'manager', 'senior associate', 'associate'],
    },
    routing_number: {
      type: DataTypes.STRING,
    },  
    account_number: {
      type: DataTypes.STRING
    }, 
  }, {
    sequelize,
    modelName: 'Users',
    underscored: true,
  });
  Users.beforeCreate((user,options) => {
    user.id = uuid.v4();
    user.password = jwt.sign({password: user.password}, config.SECRET); 
  }); 

  Users.beforeUpdate((user, options) => {
    user.updatedAt
  })


  Users.associate = models => {
    Users.hasMany(models.Organizations, {
      foreignKey: 'admin_id', 
      sourceKey: 'id'
    })

    Users.belongsToMany(models.Organizations, {
      through: 'OrgUsers', 
      as: 'MyOrgs'
    }); 
   
  }
  return Users;
};