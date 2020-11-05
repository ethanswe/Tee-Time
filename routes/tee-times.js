const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const db = require('../db/models');
const { asyncHandler } = require('./utils');

// GET TEETIMES SPLASH PAGE //
router.get('/', asyncHandler(async (req, res) => {
  const teeTimes = await db.TeeTime.findAll({ order: ['dateTime'] });
  res.render('tee-times', { title: 'TeeTimes', teeTimes });
}));

 
// GET CREATE TEETIME FORM //
router.get('/create', requireAuth, (req, res) => {
  res.send('Create New TeeTime Form')
})


// POST NEW TEETIME //
router.post('/', requireAuth, (req, res) => {
  
})

router.delete('/:id(\\d+)', requireAuth, (req, res) => {

})

module.exports = router;