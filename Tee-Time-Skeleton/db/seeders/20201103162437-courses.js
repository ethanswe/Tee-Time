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
    {name: 'Maderas Golf Club', description: null, cityId: 2, difficulty: 3, numHoles: 18, minPrice: 99.00, maxPrice: 159.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'North at Torrey Pines Municipal Golf Course', description: 'Torrey Pines is visited by travelers from all over the world and by local residents who come daily to rest at the stunning overlooks, walk a peaceful trail, or exercise in a clean, beautiful environment.', cityId: 2, difficulty: 5, numHoles: 18, minPrice: 43.00, maxPrice: 56.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Colina Park Golf Course', description: 'For over 25 years Colina Park Golf Course has served as the headquarters for Pro Kids | First Tee of San Diego, a nonprofit organization dedicated to helping underserved youth excel in life by promoting character development, life skills, and values through education and the game of golf.', cityId: 2, difficulty: 3, numHoles: 18, minPrice: 16.00, maxPrice: 16.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Rancho Bernardo Inn', description: 'If there’s a golfing nirvana, this is it. The 18-hole championship course is crisscrossed with old-growth trees providing a dramatic canopy of shade and sun-dappled light throughout. ', cityId: 2, difficulty: 4, numHoles: 18, minPrice: 30.00, maxPrice: 89.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Coronado Golf Course', description: "The Coronado Golf Course is one of the City of Coronado's most treasured assets. Opened in 1957, it is rated as one of the best public golf courses in the nation.", cityId: 2, difficulty: 4, numHoles: 18, minPrice: 26.00, maxPrice: 49.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Balboa Park Golf Course', description: 'Balboa Park Golf Course is a challenging par 72, where Sam Snead holds the course record. There is also a 9 hole executive course', cityId: 2, difficulty: 4, numHoles: 18, minPrice: 26.00, maxPrice: 88.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'The Loma Club', description: 'Dating back to the early 1900s, The Loma Club was originally part of the historic San Diego Country Club, which merged with A.G.', cityId: 2, difficulty: 3, numHoles: 18, minPrice: 12.00, maxPrice: 12.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Mission Bay Golf Course', description: 'The facility includes an 18-hole golf course, driving range (grass and mat teeing areas), practice putting greens, sand traps, chipping greens and refreshment hut. The starter booth offers club rentals, hand/power golf carts, golf balls, tees, gloves and hats.', cityId: 2, difficulty: 3, numHoles: 18, minPrice: 18.00, maxPrice: 30.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Riverwalk Golf Club', description: "Infused with the majestic Mission Valley landscape, Riverwalk Golf Club provides an affordable round of golf at one of San Diego's top golf courses.", cityId: 2, difficulty: 3, numHoles: 18, minPrice: 25.00, maxPrice: 79.00, createdAt: new Date(),	updatedAt: new Date() },
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
