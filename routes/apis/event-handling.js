
const express = require('express');
const router = express.Router();
const db = require('../../db/models');
const { asyncHandler, 
  csrfProtection, 
  teeTimeValidators,
} = require('../utils');
const { requireAuth } = require('../../auth')


// POST NEW USERTEETIME ASSOCIATION
router.post('/user-tee-times', requireAuth, asyncHandler(async(req, res) => {
  const userId = res.locals.user.id;
  let { teeTimeId } = req.body
  teeTimeId = parseInt(teeTimeId, 10)

  await db.UserTeeTime.create({ userId, teeTimeId });
  res.json();
}))


router.put('/tee-times/:id(\\d+)', requireAuth, asyncHandler(async(req, res) => {
  console.log(req.body);
}))


// DELETE USERTEETIME ASSOCIATION //
// router.delete('/user-tee-times', requireAuth, asyncHandler(async(req, res) => {
//   const userId = res.locals.user.id;
//   let { teeTimeId } = req.body
//   teeTimeId = parseInt(teeTimeId, 10)

//   const userTeeTime = await db.UserTeeTime.findOne({
//     where: {
//       userId,
//       teeTimeId
//     }
//   })

//   await userTeeTime.destroy();
//   res.json();
// }))


// DELETE TEETIME REQUEST //
router.delete('/tee-times/:id(\\d+)', requireAuth, asyncHandler(async(req, res) => {
  const { teeTimeId } = req.body
  await db.TeeTime.destroy(teeTimeId);
}))



module.exports = router;