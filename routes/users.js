var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { asyncHandler } = require('./utils');


// GET USER PROFILE/DASHBOARD //
router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
  if (res.locals.authenticated) {
    console.log('authenticated', res.locals.user.id);
    const user = await db.User.findByPk(req.params.id, { include: db.City });
    // const user = res.locals.user.id;
    let currentEvents = await db.UserTeeTime.findAll({ include: [db.TeeTime, db.User],
    where: { userId: user.id }
    });
    if (res.locals.user.id === user.id) {
      return res.render('users-profile', { title: `Welcome ${user.firstName}`, user, currentEvents });
    }
  }
  console.log('redirecting to login');
  res.redirect('/login');
}));



module.exports = router;
