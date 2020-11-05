// const express = require('express');
// const { check, validationResult } = require('express-validator');
// const db = require('../db/models');
// const { csrfProtection, asyncHandler, userValidators } = require('./utils');
// const router = express.Router();
// const bcrypt = require('bcryptjs');

// router.get('/signup',
//     csrfProtection,
//     asyncHandler(async (req, res) => {
//         const user = {};
//         const cities = await db.City.findAll({ order: ['name'] })
//         res.render('signup', { title: 'Sign Up', user, cities, csrfToken: req.csrfToken(), });
//     })
// );





// router.post('/signup', 
//   userValidators,
//   csrfProtection,
//   asyncHandler(async (req, res) => {

//   const {
//     firstName,
//     lastName,
//     age,
//     bio,
//     cityId,
//     handicap,
//     username,
//     email,
//     password,
//   } = req.body;

//   const user = await db.User.build({ 
//     firstName,
//     lastName,
//     age,
//     bio,
//     cityId,
//     handicap,
//     username,
//     email,
//     password 
//   });

//   const validatorErrors = validationResult(req);

//   if (validatorErrors.isEmpty()) {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     user.hashedPassword = hashedPassword;
//     await user.save();
//     // loginUser(req, res, user);
//     res.redirect(`/users/${user.id}`);
    
//   } else {
//     const cities = await db.City.findAll({ order: ['name'] })
//     const errors = validatorErrors.array().map((error) => error.msg);
//     res.render('signup', {
//       title: 'Error',
//       user,
//       errors,
//       cities,
//       csrfToken: req.csrfToken(),
//     });
//   }
// }));


// module.exports = router;