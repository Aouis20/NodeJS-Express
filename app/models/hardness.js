'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hardness extends Model {
    static associate(models) {
      // define association here
    }
  }
  Hardness.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hardness',
  });
  return Hardness;
};