'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserTeeTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserTeeTime.belongsTo(models.User, { foreignKey: 'userId' });
      UserTeeTime.belongsTo(models.TeeTime, { foreignKey: 'teeTimeId' });
    }
  };
  UserTeeTime.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    teeTimeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'UserTeeTime',
  });
  return UserTeeTime;
};