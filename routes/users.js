var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { asyncHandler } = require('./utils');


// GET USER PROFILE/DASHBOARD //
router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
  if (res.locals.authenticated) {
    const user = await db.User.findByPk(req.params.id, { include: db.City });

    const teeTimes = await db.TeeTime.findAll({
      order: ['dateTime'],
      include: [db.Course, db.PlayStyle, db.User,
      {
        model: db.Course,
        include: db.City
      }, {
        association: 'Users'
      }]
    });

    teeTimes.forEach(teeTime => {
      teeTime.hour = teeTime.getHour();
      teeTime.minute = teeTime.getMinute();
      teeTime.month = teeTime.getMonth();
      teeTime.day = teeTime.getDay();
      teeTime.year = teeTime.getYear();
    })

    const courses = await db.Course.findAll();
    const playStyles = await db.PlayStyle.findAll();

    if (res.locals.user.id === user.id) {
      return res.render('users-profile', { title: `Welcome ${user.firstName}`, user, teeTimes, courses, playStyles });
    }
  }
  res.redirect('/login');
}));



module.exports = router;
