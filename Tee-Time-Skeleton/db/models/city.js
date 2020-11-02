'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      City.hasMany(models.User, { foreignKey: 'cityId' });
      City.hasMany(models.Course, { foreignKey: 'cityId' });

    }
  };
  City.init({
    name: { 
      type: DataTypes.STRING(50), 
      unique: true,
      allowNull: false,
    } 
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};