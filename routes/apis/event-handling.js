
const express = require('express');
const router = express.Router();
const db = require('../../db/models');
const { asyncHandler, 
  csrfProtection, 
  teeTimeValidators,
} = require('../utils');
const { validationResult } = require('express-validator');
const { requireAuth } = require('../../auth');


// POST NEW USERTEETIME ASSOCIATION //
router.post('/user-tee-times', requireAuth, asyncHandler(async(req, res) => {
  const userId = res.locals.user.id;
  let { teeTimeId } = req.body;
  console.log('this is the teeTimeID', teeTimeId);
  // console.log('parsed teeTimeId', teeTimeId);

  await db.UserTeeTime.create({ userId, teeTimeId });
  res.json();
}))


// DELETE USERTEETIME ASSOCIATION //
router.delete('/user-tee-times', requireAuth, asyncHandler(async(req, res) => {
  const userId = res.locals.user.id;
  let { teeTimeId } = req.body

  console.log('this is the teeTimeId', teeTimeId);
  console.log('this is the userId', userId);

  const userTeeTime = await db.UserTeeTime.findOne({
    where: {
      userId,
      teeTimeId
    }
  })

  await userTeeTime.destroy();
  res.json();
}))



// PUT REQUEST TO UPDATE TEETIMES //
router.put('/tee-times/:id(\\d+)', 
  requireAuth, 
  teeTimeValidators,
  asyncHandler(async(req, res) => {
  const {
    courseId,
    playStyleId,
    month,
    day,
    year,
    hour,
    minute,
    am_pm,
    numPlayers,
    description,
    teeTimeId
  } = req.body;

  if (am_pm === 'pm') hour += 12;

  const date = new Date(year, month - 1, day, hour, minute, 0);
  const teeTime = await db.TeeTime.findByPk(teeTimeId)

  const validationErrors = validationResult(req)

  if (validationErrors.isEmpty()) {
    await teeTime.update({
      dateTime: date,
      description,
      courseId,
      numPlayers,
      playStyleId
    })
    res.json(teeTime);

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
}))


router.delete('/tee-times/:id(\\d+)/delete', 
  requireAuth, 
  asyncHandler(async(req, res) => {
    const { teeTimeId } = req.body;
    console.log(teeTimeId);
    const teeTime = await db.TeeTime.findByPk(teeTimeId);
    await db.UserTeeTime.destroy({ where: { teeTimeId }})
    console.log(teeTime);
    await teeTime.destroy();
    res.json()
}))



module.exports = router;
