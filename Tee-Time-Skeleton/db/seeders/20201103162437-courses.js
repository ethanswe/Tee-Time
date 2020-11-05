'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

  const seedData = [
    {name: 'Patriots Point Links', description: 'Harborfront 18-hole golf course with a driving range, practice green & clubhouse with a grill', cityId: 1, difficulty: 4, numHoles: 18, minPrice: 89.25, maxPrice: 89.25, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'patriots-point-links-mt-pleasant.jpg' },
    {name: 'RiverTowne Country Club', description: 'RiverTowne Country Club, located off of Highway 41 in beautiful Mount Pleasant, is home to Charleston’s only Arnold Palmer Signature golf course.', cityId: 1, difficulty: 3, numHoles: 18, minPrice: 71.00, maxPrice: 101.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'RiverTowne Country Club .jpeg'},
    {name: 'Crowfield Golf Club', description: null, cityId: 1, difficulty: 3, numHoles: 18, minPrice: 64.25, maxPrice: 103.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Crowfield Golf Club.jpeg'},
    {name: 'Dunes West Golf and River Club', description: null, cityId: 1, difficulty: 3, numHoles: 18, minPrice: 71.00, maxPrice: 270.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Dunes West Golf and River Club.jpg' },
    {name: 'Daufuskie Island Resort', description: 'Designed by Jack Nicklaus, the Melrose Course at Daufuskie Island opened in 1991.', cityId: 1, difficulty: 4, numHoles: 18, minPrice: 101.00, maxPrice: 225.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Daufuskie Island Resort.jpeg' },
    {name: 'Legend Oaks Golf Club', description: 'Legend Oaks was named the 2010 South Carolina Golf Course of the Year as selected by the Golf Course Owners Association.', cityId: 1, difficulty: 3, numHoles: 18, minPrice: 37.00, maxPrice: 45.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Legend Oaks Golf Club.jpg' },
    {name: 'Shadowmoss Golf Club', description: 'You can play this course on weekends for less that $50. Where else can you do that?', cityId: 1, difficulty: 2, numHoles: 18, minPrice: 40.00, maxPrice: 65.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Shadowmoss Golf Club.jpg' },
    {name: 'Wild Dunes Golf', description: 'Featuring 36 holes of signature golf designed by Tom Fazio, Wild Dunes was identified as one of the best courses in the state of South Carolina by Golf Digest.', cityId: 1, difficulty: 4, numHoles: 36, minPrice: 44.00, maxPrice: 146.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Wild Dunes Golf.jpg' },
    {name: 'The Links at Stono Ferry', description: 'The Links at Stono Ferry is the premier golf course in Charleston, SC.', cityId: 1, difficulty: 4, numHoles: 18, minPrice: 60.00, maxPrice: 72.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'The Links at Stono Ferry.jpeg' },
    {name: 'Maderas Golf Club', description: null, cityId: 2, difficulty: 3, numHoles: 18, minPrice: 99.00, maxPrice: 159.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Maderas Golf Club.jpeg' },
    {name: 'North at Torrey Pines Municipal Golf Course', description: 'Torrey Pines is visited by travelers from all over the world and by local residents who come daily to rest at the stunning overlooks, walk a peaceful trail, or exercise in a clean, beautiful environment.', cityId: 2, difficulty: 5, numHoles: 18, minPrice: 43.00, maxPrice: 56.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'North at Torrey Pines Municipal Golf Course.jpg' },
    {name: 'Colina Park Golf Course', description: 'For over 25 years Colina Park Golf Course has served as the headquarters for Pro Kids | First Tee of San Diego, a nonprofit organization dedicated to helping underserved youth excel in life by promoting character development, life skills, and values through education and the game of golf.', cityId: 2, difficulty: 3, numHoles: 18, minPrice: 16.00, maxPrice: 16.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Colina Park Golf Course.jpg' },
    {name: 'Rancho Bernardo Inn', description: 'If there’s a golfing nirvana, this is it. The 18-hole championship course is crisscrossed with old-growth trees providing a dramatic canopy of shade and sun-dappled light throughout. ', cityId: 2, difficulty: 4, numHoles: 18, minPrice: 30.00, maxPrice: 89.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Rancho Bernardo Inn.jpeg' },
    {name: 'Coronado Golf Course', description: "The Coronado Golf Course is one of the City of Coronado's most treasured assets. Opened in 1957, it is rated as one of the best public golf courses in the nation.", cityId: 2, difficulty: 4, numHoles: 18, minPrice: 26.00, maxPrice: 49.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Coronado Golf Course.jpg' },
    {name: 'Balboa Park Golf Course', description: 'Balboa Park Golf Course is a challenging par 72, where Sam Snead holds the course record. There is also a 9 hole executive course', cityId: 2, difficulty: 4, numHoles: 18, minPrice: 26.00, maxPrice: 88.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Balboa Park Golf Course.jpg' },
    {name: 'The Loma Club', description: 'Dating back to the early 1900s, The Loma Club was originally part of the historic San Diego Country Club, which merged with A.G.', cityId: 2, difficulty: 3, numHoles: 18, minPrice: 12.00, maxPrice: 12.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'The Loma Club.jpeg' },
    {name: 'Mission Bay Golf Course', description: 'The facility includes an 18-hole golf course, driving range (grass and mat teeing areas), practice putting greens, sand traps, chipping greens and refreshment hut. The starter booth offers club rentals, hand/power golf carts, golf balls, tees, gloves and hats.', cityId: 2, difficulty: 3, numHoles: 18, minPrice: 18.00, maxPrice: 30.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Mission Bay Golf Course.jpg' },
    {name: 'Riverwalk Golf Club', description: "Infused with the majestic Mission Valley landscape, Riverwalk Golf Club provides an affordable round of golf at one of San Diego's top golf courses.", cityId: 2, difficulty: 3, numHoles: 18, minPrice: 25.00, maxPrice: 79.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Riverwalk Golf Club .jpg' },
    {name: 'Delaware Park Golf Course ', description: null, cityId: 3, difficulty: 3, numHoles: 18, minPrice: 13.00, maxPrice: 61.07, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Delaware Park Golf Course .jpeg' },
    {name: 'Cazenovia Park Golf Course', description: null, cityId: 3, difficulty: 3, numHoles: 18, minPrice: 25.00, maxPrice: 79.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Cazenovia Park Golf Course.jpg' },
    {name: 'South Park Golf Course', description: null, cityId: 3, difficulty: 2, numHoles: 18, minPrice: 11.99, maxPrice: 61.07, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'South Park Golf Course.jpg' },
    {name: 'Grover Cleveland Golf Course', description: "Grover Cleveland Golf Course is a 5,621 yard par 69 course located in the City of Buffalo and is the site of the original Country Club of Buffalo'", cityId: 3, difficulty: 3, numHoles: 18, minPrice: 12.99, maxPrice: 33.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Grover Cleveland Golf Course.jpg' },
    {name: 'Sheridan Park Golf Course', description: "Our Sheridan Park Golf Course is generally rated to be one of the premier public courses in Western New York, and is at par 71 over 6,534 yards of tight fairways.'", cityId: 3, difficulty: 3, numHoles: 18, minPrice: 16.00, maxPrice: 33.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Sheridan Park Golf Course.jpg' },
    {name: 'Beaver Island State Park Golf Course', description: "Opened in 1965, this 18-hole championship course is located in Beaver Island State Park on Grand Island on the Niagara River, between metropolitan Buffalo and the city of Niagara Falls.", cityId: 3, difficulty: 4, numHoles: 18, minPrice: 7.00, maxPrice: 33.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Beaver Island State Park Golf Course.jpg' },
    {name: 'Brighton Park Golf Course', description: "Opened in 1961, our Brighton Park golf course has wider fairways, yet is at par 72 over 6,530 yards.'", cityId: 3, difficulty: 3, numHoles: 18, minPrice: 11.00, maxPrice: 29.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Brighton Park Golf Course.jpg' },
    {name: 'Diamond Hawk Golf Course', description: null, cityId: 3, difficulty: 4, numHoles: 18, minPrice: 20.00, maxPrice: 35.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Diamond Hawk Golf Course.jpg' },
    {name: 'Buffalo Tournament Club ', description: "Buffalo Tournament Club is a high quality, 18 hole, championship public golf facility. The golf course was designed to provide players of all skill levels with a good test of golf.", cityId: 3, difficulty: 4, numHoles: 18, minPrice: 35.00, maxPrice: 130.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Buffalo Tournament Club .jpeg' },
    {name: 'West Palm Beach Golf Course', description: "West Palm Beach Golf Course, formerly known as the West Palm Beach Country Club, was originally established in 1921. It was moved to its present location in 1947, and is an 18-hole, (Par 72) championship Dick Wilson designed course, that was restored by Mark McCumber and Associates in 2009.", cityId: 4, difficulty: 3, numHoles: 18, minPrice: 49.00, maxPrice: 49.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'West Palm Beach Golf Course.jpg' },
    {name: 'The Ocean Course at The Breakers', description: "'Discover acre upon acre of lush green: Florida’s oldest golf course, nurtured by The Breakers for more than a century. In late 2018, the course emerged from a full-scale renovation by renowned golf course architect Rees Jones. Inspiring players of all levels, the course offers an extraordinary golf experience that honors its heritage and seaside location with contemporary playability.", cityId: 4, difficulty: 4, numHoles: 18, minPrice: 85.00, maxPrice: 235.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'The Ocean Course at The Breakers.jpg' },
    {name: 'Golf Club Of The Everglades ', description: null, cityId: 4, difficulty: 4, numHoles: 18, minPrice: 20.00, maxPrice: 35.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Golf Club Of The Everglades .jpg' },
    {name: 'Lake Worth Golf Club', description: "Lake Worth Beach Golf Club has the most magnificent coastal views complimented with its rich history having been est.1926. It’s vintage South Palm Beach charm comes from the mature Banyan and other indigenous trees with interesting doglegs and very player friendly design.'", cityId: 4, difficulty: 4, numHoles: 18, minPrice: 25.00, maxPrice: 40.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Lake Worth Golf Club.jpeg' },
    {name: 'Lone Pine Golf Course', description: "Lone Pine Golf Course is an 18 hole private facility providing upscale family casual dining as well as fun and challenging golf for players of all ages'", cityId: 4, difficulty: 4, numHoles: 18, minPrice: 25.00, maxPrice: 70.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Lone Pine Golf Course.jpeg' },
    {name: 'Banyan Cay Resort & Golf', description: "Banyan Cay Resort & Golf has reinvented the traditional idea of the golf club to become a favorite of those in the know. Best of all, we’re located right in West Palm Beach.'", cityId: 4, difficulty: 4, numHoles: 18, minPrice: 52.00, maxPrice: 182.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Banyan Cay Resort & Golf.jpg' },
    {name: 'Okeeheelee Golf Course', description: "Golf course featuring 3 9-hole courses that can be combined into various 18-hole combinations.'", cityId: 4, difficulty: 4, numHoles: 9, minPrice: 23.36, maxPrice: 38.32, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Okeeheelee Golf Course.jpeg' },
    {name: 'Palm Beach Par-3 Golf Course', description: "18-hole course with water hazards & sand bunkers, plus a driving range & an eatery with sea views.'", cityId: 4, difficulty: 3, numHoles: 18, minPrice: 20.20, maxPrice: 38.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Palm Beach Par-3 Golf Course.jpg' },
    {name: 'Sandhill Crane Golf Club', description: "Par 72 golf course with a driving range, practice area & an eatery amid wetlands, pines & wildlife.'", cityId: 4, difficulty: 4, numHoles: 18, minPrice: 41.73, maxPrice: 66.34, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Sandhill Crane Golf Club.jpg' },
    {name: 'Crandon Golf at Key Biscayne', description: "Crandon Golf at Key Biscayne is a championship 18-hole golf course located on the island paradise of Key Biscayne, just 10 minutes from downtown Miami.'", cityId: 5, difficulty: 4, numHoles: 18, minPrice: 55.00, maxPrice: 95.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Crandon Golf at Key Biscayne.jpg' },
    {name: 'Normandy Shores Golf Course', description: "Normandy Shores Golf Club offers challenging golf courses and packages in a beautiful natural setting near Miami Beach. If you have never played here you are missing a great round of golf.", cityId: 5, difficulty: 5, numHoles: 18, minPrice: 65.00, maxPrice: 125.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Normandie Golf Course.jpeg' },
    {name: 'Biltmore Golf Course Miami', description: "Few American golf clubs possess the grandeur & challenge of the The Biltmore Hotel’s Donald Ross course. Enjoy timeless golf, resort amenities & member access.", cityId: 5, difficulty: 4, numHoles: 18, minPrice: 55.00, maxPrice: 145.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Biltmore Golf Course Miami.jpeg' },
    {name: 'Granada Golf Course', description: "With a multitude of programs aimed at all ages and levels, the Biltmore and Granada golf courses are a source of fun all year long.", cityId: 5, difficulty: 3, numHoles: 18, minPrice: 16.50, maxPrice: 36.50, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Granada Golf Course.jpeg' },
    {name: 'Pembroke Lakes Golf', description: "Pembroke Lakes Golf and Racquet Club opened to the public In 1969, and  underwent a $7 million dollar renovation in 2007.'", cityId: 5, difficulty: 3, numHoles: 18, minPrice: 38.00, maxPrice: 80.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Pembroke Lakes Golf.jpeg' },
    {name: 'Killian Greens Golf Club ', description: "Welcome to Killian Greens Golf Course! One of South Florida's most frequented courses, we are proud to offer year-round access to our 18-hole course to our closest neighbors and most distant visitors alike.", cityId: 5, difficulty: 3, numHoles: 18, minPrice: 24.00, maxPrice: 40.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Killian Greens Golf Club .jpeg' },
    {name: "Shula's Golf Club", description: "The Senator Course at Shula's Golf Club is a classic style course located in the serene town of Miami Lakes. Sprawling over 500 tree shaded acres, players of all skill levels will be challenged by 18 holes, Par 72 championship course.'", cityId: 5, difficulty: 4, numHoles: 18, minPrice: 32.00, maxPrice: 41.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: "Shula's Golf Club.jpg" },
    {name: 'Greynolds Golf Course ', description: "Greynolds Golf Course provides a 3,100-yard challenging layout. This par-36 course, designed by Mark Mahannah in 1964, is one of the county’s most popular nine-hole designs for all levels of play.'", cityId: 5, difficulty: 3, numHoles: 9, minPrice: 22.00, maxPrice: 25.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Greynolds Golf Course .jpeg' },
    {name: 'Palmetto Golf Course ', description: "Palmetto Golf Course is a Par-70 Championship Miami course, built on 121 acres, running parallel to US-1, south of SW 152nd Street. The 18-hole course, designed by Dick Wilson and built in 1959 by developers Porter, Russell and Wagor, was purchased by Miami-Dade County in 1967.'", cityId: 5, difficulty: 3, numHoles: 18, minPrice: 43.00, maxPrice: 43.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Palmetto Golf Course .png' },
    {name: 'Forest Park Golf Course', description: "Located in Forest Park just minutes from downtown St. Louis, the Norman K. Probstein Golf Course's three nine-hole layouts, exceptional event amenities, delicious dining and impeccable service have distinguished it as the 'Best City Golf Course in Mid-America.'", cityId: 6, difficulty: 3, numHoles: 9, minPrice: 15.00, maxPrice: 28.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Forest Park Golf Course .gif' },
    {name: 'The Highlands Golf & Tennis', description: "Situated within Forest Park just 10 minutes from downtown St. Louis, the Highlands Golf and Tennis Center's remarkable golf and tennis facilities, delicious dining, special event capabilities and outstanding guest service have earned it recognition as one of the region's crown jewels for hospitality and recreation.'", cityId: 6, difficulty: 3, numHoles: 18, minPrice: 10.00, maxPrice: 18.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'The Highlands Golf & Tennis.jpg' },
    {name: 'Eagle Springs Golf Course', description: "Nestled among the lush hills of east central Missouri, Eagle Springs Golf Club offers avid and novice golfer, alike, the chance to experience a 27-hole golf and instruction facility right in their backyard'", cityId: 6, difficulty: 4, numHoles: 27, minPrice: 22.00, maxPrice: 27.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Eagle Springs Golf Course.jpeg' },
    {name: 'Ruth Park Golf Course ', description: "Ruth Park Golf Course is in the heart of University City, Missouri. It is a 9-hole facility with driving range available for anyone to play year round'", cityId: 6, difficulty: 3, numHoles: 9, minPrice: 13.00, maxPrice: 22.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Ruth Park Golf Course .jpg' },
    {name: 'Normandie Golf Course', description: "Built in 1901, historic Normandie Golf Club is the oldest Public golf course still in operation in its original location, West of the Mississippi River.'", cityId: 6, difficulty: 3, numHoles: 18, minPrice: 14.00, maxPrice: 36.99, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Normandie Golf Course.jpeg' },
    {name: 'Indian Mounds Golf Course', description: "Indian Mounds Golf Course is located in Fairmont City, Illinois. It is an Executive golf course featuring five par 4’s and thirteen par 3’s ranging from 100 yards to 227 yards.", cityId: 6, difficulty: 4, numHoles: 18, minPrice: 15.00, maxPrice: 20.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Indian Mounds Golf Course.jpg' },
    {name: 'Quail Creek Golf Club', description: "For 30 years, Quail Creek Golf Club in St. Louis, Missouri, has welcomed golfers to our course. Over the years, we have become known as a course the whole family can enjoy.'", cityId: 6, difficulty: 3, numHoles: 18, minPrice: 13.00, maxPrice: 25.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Quail Creek Golf Club.jpeg' },
    {name: 'Florissant City Golf Course', description: "First opened to the public in 1964, Florissant Golf Clubs rolling terrain is interesting and challenging for golfers of all abilities and our fast and true undulating greens are as good as any private club!", cityId: 6, difficulty: 3, numHoles: 18, minPrice: 14.00, maxPrice: 26.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Florissant City Golf Course.jpeg' },
    {name: 'The Prairies Golf Club', description: "The Prairies Golf Club, located in the historic Village of Cahokia, Illinois, features 18 holes of par-71 golf within just minutes of downtown St. Louis, Missouri.", cityId: 6, difficulty: 3, numHoles: 18, minPrice: 16.00, maxPrice: 32.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'The Prairies Golf Club.jpg' },
    {name: 'Seneca Golf Course', description: "Hilly public course features a driving range, chipping green, putting green & various tournaments.'", cityId: 7, difficulty: 3, numHoles: 18, minPrice: 17.50, maxPrice: 24.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Seneca Golf Course.jpg' },
    {name: 'Crescent Hill Golf Course', description: "Founded in 1926, Crescent Hill Golf Course has no water hazards and no bunkers, making it a perfect course for both novice and experienced golfers.'", cityId: 7, difficulty: 3, numHoles: 18, minPrice: 13.50, maxPrice: 19.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Crescent Hill Golf Course.jpg' },
    {name: 'Shawnee Golf Course', description: "Riverside 18-hole course suiting beginners with a grass driving range, putting greens & pro shop.'", cityId: 7, difficulty: 3, numHoles: 18, minPrice: 13.50, maxPrice: 22.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Shawnee Golf Course .jpg' },
    {name: 'Iroquois Golf Course', description: "A par 4 that can play up to 405 yards, this hole doglegs to the left and is guarded by a bunker on each side.'", cityId: 7, difficulty: 4, numHoles: 18, minPrice: 13.50, maxPrice: 22.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Iroquois Golf Course.jpg' },
    {name: 'Vettiner Golf Course ', description: "Charlie Vettiner Golf Course is a gorgeous golf course with rolling hills, bent grass greens, and zoysia fairways.'", cityId: 7, difficulty: 3, numHoles: 18, minPrice: 13.50, maxPrice: 22.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Vettiner Golf Course .jpg' },
    {name: 'Cherokee Golf Course', description: "Founded in 1895, Cherokee is one of the oldest municipal golf courses in the United States. It's also the oldest public golf course in Louisville.", cityId: 7, difficulty: 4, numHoles: 18, minPrice: 14.75, maxPrice: 19.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Cherokee Golf Course.jpg' },
    {name: 'Sun Valley Golf Course', description: "Sun Valley Golf Course provides affordable golf on our stunning, 18-hole public golf course in Elsberry, Missouri.", cityId: 7, difficulty: 3, numHoles: 18, minPrice: 13.50, maxPrice: 22.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Sun Valley Golf Course .jpg' },
    {name: 'Bobby Nichols Golf Course', description: "This beautiful 9-hole course is named for Louisvillian and PGA professional Bobby Nichols. It has rolling terrain with tree-lined fairways and large, bunkered greens.", cityId: 7, difficulty: 4, numHoles: 9, minPrice: 12.50, maxPrice: 19.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Bobby Nichols Golf Course.jpg' },
    {name: 'Long Run Golf Course ', description: "Large public golf course with 18 challenging holes, plus a fishing lake, playground & tennis court.'", cityId: 7, difficulty: 4, numHoles: 18, minPrice: 13.50, maxPrice: 22.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Long Run Golf Course .jpg' },
    {name: 'Eastmoreland Golf Course', description: "Surrounded by parks & gardens, this longtime public course offers lessons, a pro shop & an eatery.", cityId: 8, difficulty: 4, numHoles: 18, minPrice: 28.00, maxPrice: 35.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Eastmoreland Golf Course.jpg' },
    {name: 'Rose City Golf Course', description: "Welcome to Rose City Golf Club! Built in 1923, our course is the second oldest municipal course in the city and state. Located in the center of northeast Portland neighborhoods, our course is a classic, tree-lined course that is both playable and challenging for players at all levels. Recent renovations have improved conditions and year-round playability at Rose City.", cityId: 8, difficulty: 4, numHoles: 18, minPrice: 23.00, maxPrice: 35.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Rose City Golf Course.jpg' },
    {name: 'Heron Lakes Golf Club', description: "Heron Lakes Golf Club offers the best combination of quality and variety of all Pacific Northwest golf courses.", cityId: 8, difficulty: 3, numHoles: 18, minPrice: 23.00, maxPrice: 39.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Heron Lakes Golf Club.jpg' },
    {name: 'Glendoveer Golf & Tennis', description: "Golf facility with 36 holes & a driving range, plus 4 indoor tennis courts & seasonal footgolf.", cityId: 8, difficulty: 4, numHoles: 36, minPrice: 25.00, maxPrice: 25.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Glendoveer Golf & Tennis.jpg' },
    {name: 'Lake Oswego Public Golf Course ', description: "Experience one of Lake Oswego's little treasures. The Lake Oswego Golf Course is a City owned 18-hole Par-3 facility with holes ranging from 74-179 yards.", cityId: 8, difficulty: 3, numHoles: 18, minPrice: 10.00, maxPrice: 18.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Lake Oswego Public Golf Course .jpeg' },
    {name: 'Claremont Golf Club ', description: "Our nine-hole club is a regulation 3,068 yard course with two exciting par-5s and two par-3s that require your best strategy.", cityId: 8, difficulty: 4, numHoles: 9, minPrice: 18.00, maxPrice: 28.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Claremont Golf Club .jpeg' },
    {name: 'McMenamins Edgefield Golf Course ', description: "Holes vary from 43 to 84 yards in length; all guests are welcome, even those who've never swung a club! Both courses are equally challenging, mostly for beginners, but fun for all.", cityId: 8, difficulty: 2, numHoles: 9, minPrice: 12.00, maxPrice: 21.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'McMenamins Edgefield Golf Course .jpeg' },
    {name: 'RedTail Golf Center ', description: "Public golf course in Portland near Beaverton, Oregon. Family-oriented golf instruction center that offers an 18-hole championship golf course.", cityId: 8, difficulty: 3, numHoles: 18, minPrice: 23.00, maxPrice: 41.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'RedTail Golf Center .jpeg' },
    {name: 'Wildwood Golf Course ', description: "Beautiful 18-hole public golf course in Portland, Oregon set in the wooded hills and valleys of the Multnomah Channel, serving local craft brews and wines.", cityId: 8, difficulty: 4, numHoles: 18, minPrice: 18.00, maxPrice: 34.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Wildwood Golf Course .jpg' },
    {name: 'Eagle Creek Golf Course', description: "Eagle Creek Golf Course is the perfect mix of rest and relaxation at Dover Air Force Base.'", cityId: 9, difficulty: 3, numHoles: 18, minPrice: 13.50, maxPrice: 13.50, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Eagle Creek Golf Course.jpg' },
    {name: 'Garrisons Lake Golf Club ', description: "Garrisons Lake Golf Club is “your place to play,” and one of Delaware’s most popular golf courses. This newly renovated championship golf course is built on 160-acres. It was originally built as a 9-hole private club in 1962, with the second nine added in 1963.", cityId: 9, difficulty: 4, numHoles: 18, minPrice: 15.00, maxPrice: 20.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Garrisons Lake Golf Club .jpg' },
    {name: 'Wheat Road Golf', description: null, cityId: 9, difficulty: 2, numHoles: 18, minPrice: 12.00, maxPrice: 15.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Wheat Road Golf .jpeg' },
    {name: 'Baywood Greens Golf Course ', description: "Baywood Greens is a public golf club located in Long Neck, Delaware that is consistently rated as one of the very best in the state. The front nine holes are nicknamed the 'Woods Nine', while the back nine holes carry the 'Water Nine' nickname.", cityId: 9, difficulty: 4, numHoles: 18, minPrice: 39.00, maxPrice: 39.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Baywood Greens Golf Course .jpg' },
    {name: 'The Rookery North Golf Course ', description: "The Rookery Golf Club: North vs. South. The Rookery South opened August, 2000 and has become a local favorite in the Delmarva peninsula", cityId: 9, difficulty: 4, numHoles: 18, minPrice: 35.00, maxPrice: 35.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'The Rookery North Golf Course .jpg' },
    {name: 'Back Creek Golf Course', description: "Located in Middletown, Delaware, Back Creek Golf Club offers an 18 Hole Golf Facility providing the area’s best “links-style” rounds with unmatched attention to detail, while doing it at some of the best rates around. Back Creek was named one of Golfweek's “Best 100 Modern Courses in the US” and one of Golf Travel Magazine's “Top 40 Public Courses in the US” for two consecutive years.", cityId: 9, difficulty: 4, numHoles: 18, minPrice: 39.00, maxPrice: 39.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Back Creek Golf Course .jpg' },
    {name: 'Port Dover Golf Club', description: "Port Dover Golf Club is an 18 hole championship course that caters to members and public play.", cityId: 9, difficulty: 4, numHoles: 18, minPrice: 18.00, maxPrice: 42.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Port Dover Golf Club .jpg' },
    {name: 'Midway Par 3 Golf Course', description: "Midway Par 3 is fun for the entire family! From beginner to experienced golfer, 6 to 96, everyone enjoys playing golf at Midway Par 3.", cityId: 9, difficulty: 2, numHoles: 18, minPrice: 12.00, maxPrice: 16.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Midway Par 3 Golf Course .jpg' },
    {name: "Johnathan's Landing Golf Course", description: "Jonathan’s Landing Golf Club is one of Delaware’s most frequently played public golf courses, with a distinctive marshland, links-style layout, undulating greens, subtle elevation changes, and windswept views.", cityId: 9, difficulty: 4, numHoles: 18, minPrice: 29.00, maxPrice: 29.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: "Johnathan's Landing Golf Course.jpeg" },
    {name: 'Candler Park Golf Course', description: "Candler Park Golf Course, a 9-hole golf course located in the northeast neighborhoods of Atlanta.", cityId: 10, difficulty: 3, numHoles: 9, minPrice: 9.00, maxPrice: 11.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Candler Park Golf Course .jpeg' },
    {name: 'North Fulton Golf Course', description: "Basic municipal golf facility with a pro shop & scenic views of the city skyline.", cityId: 10, difficulty: 3, numHoles: 18, minPrice: 23.50, maxPrice: 26.50, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'North Fulton Golf Course .jpg' },
    {name: 'Alfred Tup Holmes Golf Course', description: "From evenly cut greens to three sets of tee boxes at each hole the City of Atlanta’s Alfred ‘Tup’ Holmes Memorial Golf Course is unlike any other 18-hole golf course.", cityId: 10, difficulty: 4, numHoles: 18, minPrice: 23.50, maxPrice: 26.50, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Alfred Tup Holmes Golf Course.jpg' },
    {name: "Brown Mill's Golf Course", description: "Low-key, 18-hole municipal golf course featuring a clubhouse & picturesque views.", cityId: 10, difficulty: 4, numHoles: 18, minPrice: 23.50, maxPrice: 32.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: "Brown Mill's Golf Course .jpeg" },
    {name: 'Peachtree Golf Club', description: "The legacy of Bobby Jones lives on at Peachtree in the course and club he founded based solely on his deep love for friends and the great game of golf.", cityId: 10, difficulty: 3, numHoles: 18, minPrice: 22.50, maxPrice: 35.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Peachtree Golf Club .jpg' },
    {name: 'John A. White Golf Course', description: "John A. White Park Golf Course is a 9-hole, public access facility operated by the First Tee – Metro Atlanta.", cityId: 10, difficulty: 3, numHoles: 9, minPrice: 16.53, maxPrice: 16.53, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'John A. White Golf Course .jpeg' },
    {name: 'Bobby Jones Golf Course', description: "Bobby Jones Golf Course is more than just a revolutionary golf course design, its also home to the Grand Slam Golf Academy, the Murray Golf House, Boone’s restaurant, the Cupp Links, and the Dan Yates Putting Course! It’s a “must visit” in Atlanta!", cityId: 10, difficulty: 4, numHoles: 18, minPrice: 26.53, maxPrice: 26.53, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Bobby Jones Golf Course .jpg' },
    {name: 'College Park Golf Course', description: "Although it is a 9-hole course, it is regulation length of 2987 years, consisting of 2 par 3.5 par 4, and 2 par 5 holes, which helps average players, but it's also hard due to it's hilly terrain, streams and on site lake.", cityId: 10, difficulty: 3, numHoles: 18, minPrice: 11.00, maxPrice: 14.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'College Park Golf Course .jpg' },
    {name: 'Wolf Creek Golf Course', description: "Since 2001 Wolf Creek has earned a reputation as one of the toughest golf tracks in the Atlanta Metro area. The course is located just 10 minutes from Hartsfield-Jackson International Airport and 15 minutes from downtown Atlanta.", cityId: 10, difficulty: 4, numHoles: 18, minPrice: 32.00, maxPrice: 45.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Wolf Creek Golf Course .jpg' },
    {name: 'Golf Club of Houston', description: "The Golf Club of Houston is a private golf club in unincorporated Harris County, Texas, near Humble and northeast of Houston. The club contains two 18-hole courses; the Member Course is private, while the Tournament Course is open to the public.", cityId: 11, difficulty: 5, numHoles: 18, minPrice: 59.00, maxPrice: 59.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Golf Club of Houston.jpg' },
    {name: 'Wildcat Golf Club', description: "Golf club offering 2 uphill 18-hole courses with city views, a driving range & grill restaurant.", cityId: 11, difficulty: 4, numHoles: 18, minPrice: 44.00, maxPrice: 49.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Wildcat Golf Club .jpeg' },
    {name: 'Hermann Park Golf Course', description: "Hermann Park Golf Course is a golf course in Houston's Hermann Park, in the U.S. state of Texas. The course was renovated in 1999", cityId: 11, difficulty: 4, numHoles: 18, minPrice: 14.61, maxPrice: 18.94, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Hermann Park Golf Course.jpg' },
    {name: 'Houston National Golf Club', description: "Located in Northwest Houston, Houston National Golf Club features 18 championship holes designed by famed golf course designers Von Hagge, Smelek & Baril. Other amenities include a lighted driving range, beautiful pro shop and the “Back Deck” Bar and Grille. Houston National opened in November 2000 in one of Houston’s fastest growing communities, Stone Gate Subdivision", cityId: 11, difficulty: 5, numHoles: 18, minPrice: 39.00, maxPrice: 59.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Houston National Golf Club.jpeg' },
    {name: 'Gus Wortham Golf Course', description: "Situated along Brays Bayou, east of downtown, the Gus Wortham Park Golf Course has been an attraction for golfers since the early 1900’s when it was the Houston Country Club. The course is now managed and maintained by the Houston Municipal Golf Association, an operation of the Houston Golf Association.", cityId: 11, difficulty: 4, numHoles: 18, minPrice: 26.00, maxPrice: 41.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Gus Wortham Golf Course.jpg' },
    {name: 'Sharpstown Park Golf Course ', description: "Welcome to Houston's Best Golfing Value. Sharpstown Park Golf Course has earned this reputation by providing outstanding customer service and excellent facility conditions, while offering some of the lowest fees on the Gulf Coast.", cityId: 11, difficulty: 4, numHoles: 18, minPrice: 18.00, maxPrice: 31.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Sharpstown Park Golf Course .jpg' },
    {name: 'Clear Creek Golf Club', description: "Public golf facility with an 18-hole, link-style course, lessons, a driving range & a club house.", cityId: 11, difficulty: 4, numHoles: 18, minPrice: 16.00, maxPrice: 32.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Clear Creek Golf Club .jpg' },
    {name: 'Tour 18 Golf Course', description: "At Tour 18 Golf Course we've painstakingly reproduced the most renowned holes in the history of golf. Just imagine yourself playing the same challenging holes that have determined the outcome of tournaments such as the US Open, The Masters, The Tour Championship, and the PGA Championship.", cityId: 11, difficulty: 5, numHoles: 18, minPrice: 39.95, maxPrice: 49.95, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Tour 18 Golf Course.jpeg' },
    {name: 'Melrose Golf Course', description: "18-hole, par-3 municipal golf course featuring a driving range, a chipping green & more.", cityId: 11, difficulty: 4, numHoles: 18, minPrice: 10.00, maxPrice: 12.00, createdAt: new Date(),	updatedAt: new Date(), imgPath: 'Melrose Golf Course .jpeg' },
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
