'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const seedData = [
      {dateTime: '2021-01-01 11:00:00', description: "All Duo's are welcome! Playing in gorgeous Charleston.", courseId: 5, numPlayers: 4, ownerId: 4, playStyleId: 2, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: '2020-11-21 9:00:00', description: "Nothing beats 18 holes of golf nearby beautiful Downtown Miami! With the traditional scramble format, we will be placing wagers starting at $15/hole. Bring your A-Game!", courseId: 43, numPlayers: 4, ownerId: 2, playStyleId: 3, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: '2020-11-29 6:00:00', description: "Join us on one of the most beautiful islands in California - Coronado Island! Afterwards, join us for an exclusive after-party at the Coronado Yacht club. We will be playing traditional tournament-styled play. ", courseId: 14, numPlayers: 64, ownerId: 7, playStyleId: 4, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: '2020-12-7 15:00:00', description: "Atlanta in the winter? You can't beat 65 degrees on the golf course! Join us at the legendary Peachtree Golf Club.", courseId: 86, numPlayers: 4, ownerId: 3, playStyleId: 3, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: "2020-12-8 13:30:00", description: "Hear the ocean waves crashing on the sand while playing competitive golf! We will be featuring tournament-style play on this PGA approved course.", courseId: 33, numPlayers: 64, ownerId: 4, playStyleId: 4, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: "2020-12-13 8:30:00", description: "Normandie Golf Course - One of the most legendary golf courses in all of St. Louis! Bring your partners for a spicy day of duo's golf.", courseId: 50, numPlayers: 4, ownerId: 5, playStyleId: 2, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: "2020-12-18 5:30:00", description: "Who doesn't enjoy playing the front 9 when the sun rises? We welcome all foursome's to play with us at the Golf Club of Houston. ", courseId: 91, numPlayers: 4, ownerId: 6, playStyleId: 1, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: "2021-01-12 7:30:00", description: "It may be a little cold here in Buffalo, but that doesn't stop those who love the sport! Calling all scrambles to join us on a fun-filled day.", courseId: 22, numPlayers: 4, ownerId: 1, playStyleId: 3, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: "2021-01-19 11:15:00", description: "We have a massive tournament kicking off here at the beautiful Buffalo Tournament Club!", courseId: 27, numPlayers: 64, ownerId: 7, playStyleId: 4, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: "2021-02-03 10:30:00", description: "Let's see how everyone can compare to the legendary Bobby Nichols on his very own golf course! Duo's only!", courseId: 62, numPlayers: 4, ownerId: 2, playStyleId: 2, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: "2021-02-08 3:30:00", description: "Calling all scramble players! We will see you the afternoon of Feb. 8th for a mini-tournament.", courseId: 70, numPlayers: 4, ownerId: 4, playStyleId: 3, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: "2021-02-16 8:10:00", description: "Ocean views in the port of Dover. We will see you for an intense tournament consisting of challenging 18 holes.", courseId: 79, numPlayers:32 , ownerId: 5, playStyleId: 4, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: "2021-03-01 6:15:00", description: "See you all on the incredible course, Patriots Point Links!", courseId: 1, numPlayers: 4, ownerId: 1, playStyleId: 2, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: "2021-03-05 6:30:00", description: "If you have never heard of Torrey Pines, are you a real golfer? ", courseId: 11, numPlayers: 64, ownerId: 2, playStyleId: 4, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: "2021-03-07 5:45:00", description: "Kicking off our spring golf with a big scrambles tournament!", courseId: 23, numPlayers: 4, ownerId: 3, playStyleId: 3, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: "2021-03-15 12:00:00", description: "Playing at one of the most exclusive and private golf courses in the nation alongside some of our favorite PGA pros. See you there!", courseId: 32, numPlayers: 4, ownerId: 4, playStyleId: 1, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: "2021-03-22 14:00:00", description: "Florida - What isn't there to love?", courseId: 35, numPlayers: 4, ownerId: 5, playStyleId: 3, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: "2021-04-01 11:15:00", description: "April Fool's Day! Don't be a fool on the golf course and shoot over 100 today!", courseId: 48, numPlayers: 64, ownerId: 6, playStyleId: 4, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: "2021-04-10 6:45:00", description: "We will see you here at The Long Run!", courseId: 63, numPlayers: 4, ownerId: 7, playStyleId: 2, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: "2021-04-18 8:20:00", description: "Golf of the lake = Pure enjoyment! See you all there.", courseId: 68, numPlayers: 4, ownerId: 1, playStyleId: 3, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: "2021-04-20 9:15:00", description: "The Rookery - One of the highly acclaimed courses in the US. Excited to be having an event here!!", courseId: 77, numPlayers: 4, ownerId: 2, playStyleId: 2, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: "2021-04-25 8:30:00", description: "Bring your fierce golf game today for an intense round of 9 holes! Winner takes all.", courseId: 87, numPlayers: 64, ownerId: 3, playStyleId: 4, createdAt: new Date(), updatedAt: new Date() },
      {dateTime: "2021-04-28 7:00:00", description: "Tour 18 golf course - home of the many PGA tours. Winner takes home $10,000.", courseId: 98, numPlayers: 64, ownerId: 4, playStyleId: 4, createdAt: new Date(), updatedAt: new Date() },
    ]

    await queryInterface.bulkInsert('TeeTimes', seedData)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TeeTimes');
  }
};
