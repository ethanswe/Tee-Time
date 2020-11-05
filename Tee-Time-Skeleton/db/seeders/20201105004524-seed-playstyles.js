'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seedArray = ['Foursome', 'Duos', 'Scramble', 'Tournament'];
    const seedData = seedArray.map(style => {
      return { name: style, createdAt: new Date(), updatedAt: new Date()}
    });
    
    await queryInterface.bulkInsert('PlayStyles', seedData)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PlayStles')
  }
};
