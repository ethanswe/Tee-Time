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


// GET HOME PAGE //
router.get('/', function(req, res, next) {
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
      console.log(user);
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

router.post('/login/demo', 
  asyncHandler(async(req, res) => {
  const demoUser = await db.User.findByPk(1);

  req.session.auth = {
    userId: demoUser.id,
  };
  req.session.save((err) => {
    return res.json();
  });
}))


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

      if (user !== null) {        
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

        if (passwordMatch) {
          loginUser(req, res, user);
          return;
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
router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/');
})



module.exports = router;
