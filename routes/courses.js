const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { asyncHandler } = require('./utils')
const { requireAuth } = require('../auth');
const {
  csrfProtection,
  teeTimeValidators
} = require('./utils');



router.get('/', asyncHandler(async(req, res) => {
  const courses = await db.Course.findAll({
    include: db.City
  });

  res.render('courses-splash', { title: 'Courses', courses })
}))


router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
  const course = await db.Course.findByPk(req.params.id);
  const currentCourse = await db.Course.findByPk(req.params.id);

  res.render('courses-profile', { title: course.name, course, currentCourse })
}))

// router.get(
//   '/id(\\d+)/create',
//   requireAuth,
//   csrfProtection,
//   asyncHandler(async (req, res) => {
//   console.log('this is some text', req.params.id)
//   const currentCourse = await db.Course.findByPk(req.params.id)
//   console.log('this is text', currentCourse)
//   const courses = await db.Course.findAll();
//   const playStyles = await db.PlayStyle.findAll();
//   const teeTime = {}

//   res.render('tee-times-create', {
//     currentCourse,
//     courses,
//     playStyles,
//     teeTime,
//     csrfToken: req.csrfToken()
//   })
// }))


module.exports = router;
