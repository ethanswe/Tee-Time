const express = require('express');
const { validationResult } = require('express-validator');
const router = express.Router();
const { requireAuth } = require('../auth');
const db = require('../db/models');
const {
  asyncHandler,
  csrfProtection,
  teeTimeValidators
} = require('./utils');


// GET TEETIMES SPLASH PAGE //
router.get('/', asyncHandler(async (req, res) => {
  let teeTimes = await db.TeeTime.findAll({
    order: ['dateTime'],
    include: [db.Course, db.PlayStyle, db.User,
      {
        model: db.Course,
        include: db.City
      }, {
        association: 'Users'
      }]
  });

  res.render('tee-times', { title: 'TeeTimes', teeTimes });
}));


// GET CREATE TEETIME FORM //
router.get(
  '/create',
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res) => {
  const courses = await db.Course.findAll();
  const playStyles = await db.PlayStyle.findAll();
  const teeTime = {}

  res.render('tee-times-create', {
    courses,
    playStyles,
    teeTime,
    csrfToken: req.csrfToken()
  })
}))

router.get(
  '/courses/:id(\\d+)/create',
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res) => {
  console.log('this is some text', req.params.id)
  const currentCourse = await db.Course.findByPk(req.params.id)
  console.log('this is text', currentCourse)
  const courses = await db.Course.findAll();
  const playStyles = await db.PlayStyle.findAll();
  const teeTime = {}

  res.render('tee-times-create', {
    currentCourse,
    courses,
    playStyles,
    teeTime,
    csrfToken: req.csrfToken()
  })
}))


// router.get('/', asyncHandler(async(req, res) => {
//   // const {  }
//   const filteredCourses = await db.Course.findAll({
//     where: {
//       minPrice: {
//         [Op.gte]: amount
//       },
//       maxPrice: {
//         [Op.lte]: amount
//       }
//     }
//   });
//     res.render('tee-times', {
//       filteredCourses,
//       csrfToken: req.csrfToken(),
//     })
// }));


// POST NEW TEETIME //
router.post(
  '/',
  requireAuth,
  teeTimeValidators,
  csrfProtection,
  asyncHandler(async(req, res) => {
  const {
    month, day, year,
    hour, minute, am_pm,
    courseId,
    playStyleId,
    numPlayers,
    description
  } = req.body

  if (am_pm === 'pm') hour += 12;

  // const isFull =
  const user = res.locals.user;
  const date = new Date(year, month - 1, day, hour, minute, 0);
  const ownerId = user.id;

  const teeTime = await db.TeeTime.build({
    dateTime: date,
    description,
    courseId,
    numPlayers,
    ownerId,
    playStyleId
  })

  const validationErrors = validationResult(req)

    if (validationErrors.isEmpty()) {
      await teeTime.save();
      await db.UserTeeTime.create({
        userId: res.locals.user.id,
        teeTimeId: teeTime.id
      })
      res.redirect(`/users/${user.id}`);

    } else {
      const courses = await db.Course.findAll();
      const playStyles = await db.PlayStyle.findAll();
      const errors = validationErrors.array().map((error) => error.msg);

      res.render('tee-times-create', {
        teeTime,
        errors,
        courses,
        playStyles,
        csrfToken: req.csrfToken(),
      });
    }


}));

router.post(
  '/:id(\\d+)',
  requireAuth,
  asyncHandler(async(req, res) => {
  const teeTime = db.TeeTime.findByPk(req.params.id);
  await db.TeeTime.destroy(teeTime);
  res.redirect('/tee-times');
}))

module.exports = router;
