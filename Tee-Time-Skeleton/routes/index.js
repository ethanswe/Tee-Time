var express = require('express');
var router = express.Router();
const { validationResult } = require('express-validator');
const { loginUser, logoutUser } = require('../auth')
const db = require('../db/models');
const {
  csrfProtection,
  asyncHandler,
  userValidators,
  loginValidators
} = require('./utils');
const bcrypt = require('bcryptjs');


// GET HOME PAGE
router.get('/', function(req, res, next) {
  console.log(req.session);
  console.log(res.locals);
  res.render('index', { title: 'a/A Express Skeleton Home' });
});


// GET NEW USER SIGNUP //
router.get('/signup',
  csrfProtection,
  asyncHandler(async (req, res) => {
    const user = {};
    const cities = await db.City.findAll({ order: ['name'] })
    res.render('signup', { title: 'Sign Up', user, cities, csrfToken: req.csrfToken(), });
  })
);


// POST NEW USER SIGNUP //
router.post('/signup',
  userValidators,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const {
      firstName,
      lastName,
      age,
      bio,
      cityId,
      handicap,
      username,
      email,
      password,
    } = req.body;

    const user = await db.User.build({
      firstName,
      lastName,
      age,
      bio,
      cityId,
      handicap,
      username,
      email,
      password
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await user.save();
      loginUser(req, res, user);
      res.redirect(`/users/${user.id}`);

    } else {
      const cities = await db.City.findAll({ order: ['name'] })
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('signup', {
        title: 'Error',
        user,
        errors,
        cities,
        csrfToken: req.csrfToken(),
      });
    }
  }));


// GET EXISTING USER LOGIN //
router.get('/login', csrfProtection, (req, res) => {
  res.render('user-login', {
    title: 'Login',
    csrfToken: req.csrfToken(),
  });
});


// POST EXISTING USER LOGIN //
router.post('/login', 
  loginValidators,
  csrfProtection, 
  asyncHandler(async (req, res) => {
    const {
      email,
      password,
    } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);



    if (validatorErrors.isEmpty()) {
      const user = await db.User.findOne({ where: { email } });
      console.log('user exists:', user);
      if (user !== null) {
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());
        console.log('passwordMatch:', passwordMatch);
        if (passwordMatch) {
          loginUser(req, res, user);
          console.log('user login successful', req.session);
          return res.redirect(`/users/${user.id}`);
        }
      }

      errors.push(`Login failed for the provided email address and password`);
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('user-login', {
      title: 'Login',
      email,
      errors,
      csrfToken: req.csrfToken(),
    });
  }));


// POST AUTHENTICATED USER LOGOUT //
router.get('/logout', (req, res) => {
  // console.log('logout');
  // console.log(req.session);
  // logoutUser(req, res);
  res.redirect('/logout-post');
});

router.post('/logout-post', (req, res) => {
  logoutUser(req, res);
  res.redirect('/')
})


module.exports = router;
