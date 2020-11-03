var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { asyncHandler } = require('./utils');
const { restoreUser } = require('../auth')


// GET USER PROFILE/DASHBOARD //
router.get('/:id(\\d+)', restoreUser, asyncHandler(async(req, res) => {
  if (res.locals.authenticated) {
    const user = await db.User.findByPk(req.params.id);
    if (res.locals.user.id === user.id) {
      res.render('users-profile', { title: `Welcome ${user.firstName}`})
    }
  }
  res.redirect('/login');
}));



module.exports = router;
