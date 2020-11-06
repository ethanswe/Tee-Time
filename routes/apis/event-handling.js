
const express = require('express');
const router = express.Router();
const db = require('../../db/models');
const { asyncHandler, csrfProtection, teeTimeValidators } = require('../utils');


// POST NEW USERTEETIME ASSOCIATION
router.post('/user-tee-times', asyncHandler(async(req, res) => {
  const userId = res.locals.user.id;
  let { teeTimeId } = req.body
  teeTimeId = parseInt(teeTimeId, 10)

  await db.UserTeeTime.create({ userId, teeTimeId });
  res.json();
}))


// DELETE USERTEETIME ASSOCIATION //
router.delete('/user-tee-times', asyncHandler(async(req, res) => {
  const userId = res.locals.user.id;
  let { teeTimeId } = req.body
  teeTimeId = parseInt(teeTimeId, 10)

  const userTeeTime = await db.UserTeeTime.findOne({
    where: {
      userId,
      teeTimeId
    }
  })

  console.log(userTeeTime);

  await userTeeTime.destroy();
  res.json();
}))


module.exports = router;