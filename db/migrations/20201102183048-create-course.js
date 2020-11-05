'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
        unique: true,
      },
      description: {
        type: Sequelize.TEXT
      },
      cityId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Cities' },
      },
      difficulty: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      numHoles: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      minPrice: {
        allowNull: false,
        type: Sequelize.NUMERIC(6,2)
      },
      maxPrice: {
        allowNull: false,
        type: Sequelize.NUMERIC(6,2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      imgPath: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Courses');
  }
};