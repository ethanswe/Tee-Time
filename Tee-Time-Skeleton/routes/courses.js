const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { asyncHandler } = require('./utils')



router.get('/', asyncHandler(async(req, res) => {
  const courses = await db.Course.findAll();

  res.render('courses-splash', { title: 'Courses', courses})
}))


router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
  const course = await db.Course.findByPk(req.params.id);

  res.render('courses-profile', { title: course.name, course })
}))


module.exports = router;