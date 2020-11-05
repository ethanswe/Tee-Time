var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { asyncHandler } = require('./utils');


// GET USER PROFILE/DASHBOARD //
router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
  if (res.locals.authenticated) {
    console.log('authenticated', res.locals.user.id);
    const user = await db.User.findByPk(req.params.id);
    
    if (res.locals.user.id === user.id) {
      return res.render('users-profile', { title: `Welcome ${user.firstName}` });
    }
  }
  console.log('redirecting to login');
  res.redirect('/login');
}));



module.exports = router;
