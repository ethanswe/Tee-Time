'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.City, { foreignKey: 'cityId' });
      User.hasMany(models.TeeTime, { foreignKey: 'ownerId' });

      const columnMapping = {
        through: 'UserTeeTimes',
        otherKey: 'teeTimeId',
        foreignKey: 'userId'
      }
      User.belongsToMany(models.TeeTime, columnMapping)
    }
  };
  User.init({
    firstName: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    bio: {
      type: DataTypes.TEXT,
    },
    username: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(50),
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    age: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    cityId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Cities' }
    },
    handicap: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};