'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Course.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    cityId: DataTypes.INTEGER,
    difficulty: DataTypes.INTEGER,
    numHoles: DataTypes.INTEGER,
    minPrice: DataTypes.NUMERIC,
    maxPrice: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};