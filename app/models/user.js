'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Le champ firstName est obligatoire.'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Le champ lastName est obligatoire.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'L\'email doit être unique.'
      },
      validate: {
        notNull: {
          msg: 'Le champ email est obligatoire.'
        },
        isEmail: {
          msg: 'L\'email doit être au bon format.'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Le champ password est obligatoire.'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};