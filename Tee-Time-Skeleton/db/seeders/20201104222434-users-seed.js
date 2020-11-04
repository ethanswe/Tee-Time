'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const seedData = [
      {firstName: "test", lastName: "test", bio: "Avid golfer from the US", username: "test", hashedPassword: "test", email:"test@test.com", age: 24, cityId: 3, handicap: 22, createdAt: new Date(),	updatedAt: new Date() },
      {firstName: "Ryan", lastName: "Reynolds", bio: "Absolutely love competitive golfing", username: "ryanr", hashedPassword: "ryanr", email:"ryan@ryan.com", age: 33, cityId: 2, handicap: 3, createdAt: new Date(),	updatedAt: new Date() },
      {firstName: "Corbin", lastName: "A", bio: "Try my hardest to shoot above 110", username: "corbina", hashedPassword: "corbina", email:"corbin@corbin.com", age: 27, cityId: 1, handicap: 31, createdAt: new Date(),	updatedAt: new Date() },
      {firstName: "Ethan", lastName: "S", bio: "I can't tee off", username: "ethans", hashedPassword: "ethans", email:"ethan@ethan.com", age: 24, cityId: 6, handicap: 22, createdAt: new Date(),	updatedAt: new Date() },
      {firstName: "Maxwell", lastName: "M", bio: "I prefer rock climbing over golf", username: "maxwella", hashedPassword: "maxwella", email:"maxwell@maxwell.com", age: 29, cityId: 11, handicap: 32, createdAt: new Date(),	updatedAt: new Date() },
      {firstName: "Ian", lastName: "B", bio: "It's too cold to golf in NY", username: "ianb", hashedPassword: "ianb", email:"ian@ian.com", age: 30, cityId: 4, handicap: 11, createdAt: new Date(),	updatedAt: new Date() },
      {firstName: "Tiger", lastName: "Woods", bio: "I'm a living legend", username: "tigerw", hashedPassword: "tigerw", email:"tiger@tiger.com", age: 38, cityId: 7, handicap: 1, createdAt: new Date(),	updatedAt: new Date()},
    ]

     await queryInterface.bulkInsert('Users', seedData);
  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkDelete('Users', null, {});
  }
};
