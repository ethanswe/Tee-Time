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
    {name: 'Delaware Park Golf Course ', description: null, cityId: 3, difficulty: 3, numHoles: 18, minPrice: 13.00, maxPrice: 61.07, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Cazenovia Park Golf Course', description: null, cityId: 3, difficulty: 3, numHoles: 18, minPrice: 25.00, maxPrice: 79.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'South Park Golf Course', description: null, cityId: 3, difficulty: 2, numHoles: 18, minPrice: 11.99, maxPrice: 61.07, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Grover Cleveland Golf Course', description: "Grover Cleveland Golf Course is a 5,621 yard par 69 course located in the City of Buffalo and is the site of the original Country Club of Buffalo'", cityId: 3, difficulty: 3, numHoles: 18, minPrice: 12.99, maxPrice: 33.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Sheridan Park Golf Course', description: "Our Sheridan Park Golf Course is generally rated to be one of the premier public courses in Western New York, and is at par 71 over 6,534 yards of tight fairways.'", cityId: 3, difficulty: 3, numHoles: 18, minPrice: 16.00, maxPrice: 33.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Beaver Island State Park Golf Course', description: "Opened in 1965, this 18-hole championship course is located in Beaver Island State Park on Grand Island on the Niagara River, between metropolitan Buffalo and the city of Niagara Falls.", cityId: 3, difficulty: 4, numHoles: 18, minPrice: 7.00, maxPrice: 33.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Brighton Park Golf Course', description: "Opened in 1961, our Brighton Park golf course has wider fairways, yet is at par 72 over 6,530 yards.'", cityId: 3, difficulty: 3, numHoles: 18, minPrice: 11.00, maxPrice: 29.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Diamond Hawk Golf Course', description: null, cityId: 3, difficulty: 4, numHoles: 18, minPrice: 20.00, maxPrice: 35.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Buffalo Tournament Club ', description: "Buffalo Tournament Club is a high quality, 18 hole, championship public golf facility. The golf course was designed to provide players of all skill levels with a good test of golf.", cityId: 3, difficulty: 4, numHoles: 18, minPrice: 35.00, maxPrice: 130.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'West Palm Beach Golf Course', description: "West Palm Beach Golf Course, formerly known as the West Palm Beach Country Club, was originally established in 1921. It was moved to its present location in 1947, and is an 18-hole, (Par 72) championship Dick Wilson designed course, that was restored by Mark McCumber and Associates in 2009.", cityId: 4, difficulty: 3, numHoles: 18, minPrice: 49.00, maxPrice: 49.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'The Ocean Course at The Breakers', description: "'Discover acre upon acre of lush green: Florida’s oldest golf course, nurtured by The Breakers for more than a century. In late 2018, the course emerged from a full-scale renovation by renowned golf course architect Rees Jones. Inspiring players of all levels, the course offers an extraordinary golf experience that honors its heritage and seaside location with contemporary playability.", cityId: 4, difficulty: 4, numHoles: 18, minPrice: 85.00, maxPrice: 235.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Golf Club Of The Everglades ', description: null, cityId: 4, difficulty: 4, numHoles: 18, minPrice: 20.00, maxPrice: 35.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Lake Worth Golf Club', description: "Lake Worth Beach Golf Club has the most magnificent coastal views complimented with its rich history having been est.1926. It’s vintage South Palm Beach charm comes from the mature Banyan and other indigenous trees with interesting doglegs and very player friendly design.'", cityId: 4, difficulty: 4, numHoles: 18, minPrice: 25.00, maxPrice: 40.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Lone Pine Golf Course', description: "Lone Pine Golf Course is an 18 hole private facility providing upscale family casual dining as well as fun and challenging golf for players of all ages'", cityId: 4, difficulty: 4, numHoles: 18, minPrice: 25.00, maxPrice: 70.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Banyan Cay Resort & Golf', description: "Banyan Cay Resort & Golf has reinvented the traditional idea of the golf club to become a favorite of those in the know. Best of all, we’re located right in West Palm Beach.'", cityId: 4, difficulty: 4, numHoles: 18, minPrice: 52.00, maxPrice: 182.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Okeeheelee Golf Course', description: "Golf course featuring 3 9-hole courses that can be combined into various 18-hole combinations.'", cityId: 4, difficulty: 4, numHoles: 9, minPrice: 23.36, maxPrice: 38.32, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Palm Beach Par-3 Golf Course', description: "18-hole course with water hazards & sand bunkers, plus a driving range & an eatery with sea views.'", cityId: 4, difficulty: 3, numHoles: 18, minPrice: 20.20, maxPrice: 38.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Sandhill Crane Golf Club', description: "Par 72 golf course with a driving range, practice area & an eatery amid wetlands, pines & wildlife.'", cityId: 4, difficulty: 4, numHoles: 18, minPrice: 41.73, maxPrice: 66.34, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Crandon Golf at Key Biscayne', description: "Crandon Golf at Key Biscayne is a championship 18-hole golf course located on the island paradise of Key Biscayne, just 10 minutes from downtown Miami.'", cityId: 5, difficulty: 4, numHoles: 18, minPrice: 55.00, maxPrice: 95.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Normandy Shores Golf Course', description: "Normandy Shores Golf Club offers challenging golf courses and packages in a beautiful natural setting near Miami Beach. If you have never played here you are missing a great round of golf.", cityId: 5, difficulty: 5, numHoles: 18, minPrice: 65.00, maxPrice: 125.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Biltmore Golf Course Miami', description: "Few American golf clubs possess the grandeur & challenge of the The Biltmore Hotel’s Donald Ross course. Enjoy timeless golf, resort amenities & member access.", cityId: 5, difficulty: 4, numHoles: 18, minPrice: 55.00, maxPrice: 145.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Granada Golf Course', description: "With a multitude of programs aimed at all ages and levels, the Biltmore and Granada golf courses are a source of fun all year long.", cityId: 5, difficulty: 3, numHoles: 18, minPrice: 16.50, maxPrice: 36.50, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Pembroke Lakes Golf', description: "Pembroke Lakes Golf and Racquet Club opened to the public In 1969, and  underwent a $7 million dollar renovation in 2007.'", cityId: 5, difficulty: 3, numHoles: 18, minPrice: 38.00, maxPrice: 80.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Killian Greens Golf Club ', description: "Welcome to Killian Greens Golf Course! One of South Florida's most frequented courses, we are proud to offer year-round access to our 18-hole course to our closest neighbors and most distant visitors alike.", cityId: 5, difficulty: 3, numHoles: 18, minPrice: 24.00, maxPrice: 40.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: "Shula's Golf Club", description: "The Senator Course at Shula's Golf Club is a classic style course located in the serene town of Miami Lakes. Sprawling over 500 tree shaded acres, players of all skill levels will be challenged by 18 holes, Par 72 championship course.'", cityId: 5, difficulty: 4, numHoles: 18, minPrice: 32.00, maxPrice: 41.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Greynolds Golf Course ', description: "Greynolds Golf Course provides a 3,100-yard challenging layout. This par-36 course, designed by Mark Mahannah in 1964, is one of the county’s most popular nine-hole designs for all levels of play.'", cityId: 5, difficulty: 3, numHoles: 9, minPrice: 22.00, maxPrice: 25.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Palmetto Golf Course ', description: "Palmetto Golf Course is a Par-70 Championship Miami course, built on 121 acres, running parallel to US-1, south of SW 152nd Street. The 18-hole course, designed by Dick Wilson and built in 1959 by developers Porter, Russell and Wagor, was purchased by Miami-Dade County in 1967.'", cityId: 5, difficulty: 3, numHoles: 18, minPrice: 43.00, maxPrice: 43.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Forest Park Golf Course', description: "Located in Forest Park just minutes from downtown St. Louis, the Norman K. Probstein Golf Course's three nine-hole layouts, exceptional event amenities, delicious dining and impeccable service have distinguished it as the 'Best City Golf Course in Mid-America.'", cityId: 6, difficulty: 3, numHoles: 9, minPrice: 15.00, maxPrice: 28.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'The Highlands Golf & Tennis', description: "Situated within Forest Park just 10 minutes from downtown St. Louis, the Highlands Golf and Tennis Center's remarkable golf and tennis facilities, delicious dining, special event capabilities and outstanding guest service have earned it recognition as one of the region's crown jewels for hospitality and recreation.'", cityId: 6, difficulty: 3, numHoles: 18, minPrice: 10.00, maxPrice: 18.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Eagle Springs Golf Course', description: "Nestled among the lush hills of east central Missouri, Eagle Springs Golf Club offers avid and novice golfer, alike, the chance to experience a 27-hole golf and instruction facility right in their backyard'", cityId: 6, difficulty: 4, numHoles: 27, minPrice: 22.00, maxPrice: 27.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Ruth Park Golf Course ', description: "Ruth Park Golf Course is in the heart of University City, Missouri. It is a 9-hole facility with driving range available for anyone to play year round'", cityId: 6, difficulty: 3, numHoles: 9, minPrice: 13.00, maxPrice: 22.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Normandie Golf Course', description: "Built in 1901, historic Normandie Golf Club is the oldest Public golf course still in operation in its original location, West of the Mississippi River.'", cityId: 6, difficulty: 3, numHoles: 18, minPrice: 14.00, maxPrice: 36.99, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Indian Mounds Golf Course', description: "Indian Mounds Golf Course is located in Fairmont City, Illinois. It is an Executive golf course featuring five par 4’s and thirteen par 3’s ranging from 100 yards to 227 yards.", cityId: 6, difficulty: 4, numHoles: 18, minPrice: 15.00, maxPrice: 20.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Quail Creek Golf Club', description: "For 30 years, Quail Creek Golf Club in St. Louis, Missouri, has welcomed golfers to our course. Over the years, we have become known as a course the whole family can enjoy.'", cityId: 6, difficulty: 3, numHoles: 18, minPrice: 13.00, maxPrice: 25.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Florissant City Golf Course', description: "First opened to the public in 1964, Florissant Golf Clubs rolling terrain is interesting and challenging for golfers of all abilities and our fast and true undulating greens are as good as any private club!", cityId: 6, difficulty: 3, numHoles: 18, minPrice: 14.00, maxPrice: 26.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'The Prairies Golf Club', description: "The Prairies Golf Club, located in the historic Village of Cahokia, Illinois, features 18 holes of par-71 golf within just minutes of downtown St. Louis, Missouri.", cityId: 6, difficulty: 3, numHoles: 18, minPrice: 16.00, maxPrice: 32.00, createdAt: new Date(),	updatedAt: new Date() },
    {name: 'Diamond Hawk Golf Course', description: null, cityId: 7, difficulty: 4, numHoles: 18, minPrice: 20.00, maxPrice: 35.00, createdAt: new Date(),	updatedAt: new Date() },
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
