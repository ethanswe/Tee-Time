'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seedData = [
      { name: 'Charleston', createdAt: new Date(), updatedAt: new Date },
      { name: 'San Diego', createdAt: new Date(), updatedAt: new Date },
      { name: 'Buffalo', createdAt: new Date(), updatedAt: new Date },
      { name: 'Palm Beach', createdAt: new Date(), updatedAt: new Date },
      { name: 'Miami', createdAt: new Date(), updatedAt: new Date },
      { name: 'St. Louis', createdAt: new Date(), updatedAt: new Date },
      { name: 'Louisville', createdAt: new Date(), updatedAt: new Date },
      { name: 'Portland', createdAt: new Date(), updatedAt: new Date },
      { name: 'Dover', createdAt: new Date(), updatedAt: new Date },
      { name: 'Atlanta', createdAt: new Date(), updatedAt: new Date },
      { name: 'Houtson', createdAt: new Date(), updatedAt: new Date },
    ]

    await queryInterface.bulkInsert('Cities', seedData)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cities')
  }
};
