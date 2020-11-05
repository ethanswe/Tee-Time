const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const db = require('../db/models');
const { asyncHandler } = require('./utils');

// GET TEETIMES SPLASH PAGE //
router.get('/', asyncHandler(async (req, res) => {
  const teeTimes = await db.TeeTime.findAll({
    order: ['dateTime'],
    include: [db.Course, db.PlayStyle, db.User, {
      model: db.Course,
      include: db.City
    }]
  });
  res.render('tee-times', { title: 'TeeTimes', teeTimes });
}));


// GET CREATE TEETIME FORM //
router.get('/create', asyncHandler(async (req, res) => {
  // const cities = await db.City.findAll({ order: ['name'] });
  const courses = await db.Course.findAll();
  const playStyles = await db.PlayStyle.findAll();
  const teeTime = {}

  res.render('tee-times-create', { title: 'Create a Tee Time', courses, playStyles, teeTime })
}))


router.get('/', asyncHandler(async(req, res) => {
  // const {  }
  const filteredCourses = await db.Course.findAll({
    where: {
      minPrice: {
        [Op.gte]: amount
      },
      maxPrice: {
        [Op.lte]: amount
      }
    }
  });
    res.render('tee-times', {
      filteredCourses,
      csrfToken: req.csrfToken(),
    })
}));


// POST NEW TEETIME //
router.post('/', requireAuth, asyncHandler(async(req, res) => {
  const { 
    month, day, year, 
    hour, minute, am_pm, 
    courseId, 
    playStyleId,
    numPlayers,
    description
  } = req.body
  
  const date = new Date(year, month - 1, day, hour, minute, 0)
  const ownerId = res.locals.user.id




}));

router.delete('/:id(\\d+)', requireAuth, (req, res) => {

})

module.exports = router;
