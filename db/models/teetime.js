'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeeTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TeeTime.belongsTo(models.User, { foreignKey: 'ownerId' });
      TeeTime.belongsTo(models.Course, { foreignKey: 'courseId' });
      TeeTime.belongsTo(models.PlayStyle, { foreignKey: 'playStyleId' });

      const columnMapping = {
        through: 'UserTeeTimes',
        otherKey: 'teeTimeId',
        foreignKey: 'userId'
      }
      TeeTime.belongsToMany(models.User, columnMapping)
    }
  };
  TeeTime.init({
    dateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    numPlayers: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    playStyleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'TeeTime',
  });
  return TeeTime;
};