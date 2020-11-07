'use strict';
const format = require('dateformat');

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
        through: 'UserTeeTime',
        otherKey: 'userId',
        foreignKey: 'teeTimeId'
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

  TeeTime.prototype.formatDate = function() {
    return format(this.dateTime, "ddd, mmm dd")
  }

  TeeTime.prototype.formatTime = function() {
    return format(this.dateTime, "h:MM TT")
  }

  TeeTime.prototype.getHour = function() {
    return format(this.dateTime, "h")
  }

  TeeTime.prototype.getMinute = function() {
    return format(this.dateTime, "MM")
  }

  TeeTime.prototype.getMonth = function() {
    return format(this.dateTime, "mm")
  }

  TeeTime.prototype.getDay = function() {
    return format(this.dateTime, "dd")
  }

  TeeTime.prototype.getYear = function() {
    return format(this.dateTime, "yyyy")
  }

  TeeTime.prototype.isJoined = function(userId) {
    const users = this.Users;
    const attendees = users.map(user => user.id);
    return attendees.includes(userId)
  }
  TeeTime.prototype.isFull = function() {
    return this.Users.length === this.numPlayers
  }
  return TeeTime;
};