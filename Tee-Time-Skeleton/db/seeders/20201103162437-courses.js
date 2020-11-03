'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

  const seedData = [
    {name: 'Patriots Point Links', description: 'Harborfront 18-hole golf course with a driving range, practice green & clubhouse with a grill', cityId: 1, difficulty: 4, numHoles: 18, minPrice: 89.25, maxPrice: 89.25, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'RiverTowne Country Club', description: 'RiverTowne Country Club, located off of Highway 41 in beautiful Mount Pleasant, is home to Charleston’s only Arnold Palmer Signature golf course.', cityId: 1, difficulty: 3, numHoles: 18, minPrice: 71.00, maxPrice: 101.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Crowfield Golf Club', description: null, cityId: 1, difficulty: 3, numHoles: 18, minPrice: 64.25, maxPrice: 103.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Dunes West Golf and River Club', description: null, cityId: 1, difficulty: 3, numHoles: 18, minPrice: 71.00, maxPrice: 270.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Daufuskie Island Resort', description: 'Designed by Jack Nicklaus, the Melrose Course at Daufuskie Island opened in 1991.', cityId: 1, difficulty: 4, numHoles: 18, minPrice: 101.00, maxPrice: 225.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Legend Oaks Golf Club', description: 'Legend Oaks was named the 2010 South Carolina Golf Course of the Year as selected by the Golf Course Owners Association.', cityId: 1, difficulty: 3, numHoles: 18, minPrice: 37.00, maxPrice: 45.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Shadowmoss Golf Club', description: 'You can play this course on weekends for less that $50. Where else can you do that?', cityId: 1, difficulty: 2, numHoles: 18, minPrice: 40.00, maxPrice: 65.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Wild Dunes Golf', description: 'Featuring 36 holes of signature golf designed by Tom Fazio, Wild Dunes was identified as one of the best courses in the state of South Carolina by Golf Digest.', cityId: 1, difficulty: 4, numHoles: 36, minPrice: 44.00, maxPrice: 146.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'The Links at Stono Ferry', description: 'The Links at Stono Ferry is the premier golf course in Charleston, SC.', cityId: 1, difficulty: 4, numHoles: 18, minPrice: 60.00, maxPrice: 72.00, createdAt: new Date(),	updatedAt: new Date() },
  ]
   await queryInterface.bulkInsert('Courses', seedData)
  }, 

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
      await queryInterface.bulkDelete('Courses')
  }
};
