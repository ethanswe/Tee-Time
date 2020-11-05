'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.belongsTo(models.City, { foreignKey: 'cityId' });
    }
  };
  Course.init({
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(255),
    },
    description: {
      type: DataTypes.TEXT,
    },
    cityId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Cities' }
    },
    difficulty: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    numHoles: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    minPrice: {
      allowNull: false,
      type: DataTypes.NUMERIC(6,2),
    },
    maxPrice: {
      allowNull: false,
      type: DataTypes.NUMERIC(6,2)
    }, 
    imgPath: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};