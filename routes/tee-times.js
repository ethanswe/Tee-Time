const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const db = require('../db/models');
const { asyncHandler } = require('./utils');

// GET TEETIMES SPLASH PAGE //
router.get('/', (req, res) => {
  // const teeTimes = db.TeeTime.findAll({ order: ['dateTime'] });
  res.render('tee-times', { title: 'TeeTimes' });
})


// GET CREATE TEETIME FORM //
router.get('/create', requireAuth, (req, res) => {
  const cities = db.City.findAll({ order: ['name'] });
  const courses = db.Course.findAll();
  const playStyles = db.PlayStyle.findAll();

  res.render('tee-times-create', { title: 'Create a Tee Time', })
})

router.get('/', asyncHandler(async(req, res) => {
  const {  }
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
router.post('/', requireAuth, (req, res) => {

})

router.delete('/:id(\\d+)', requireAuth, (req, res) => {

})

module.exports = router;
