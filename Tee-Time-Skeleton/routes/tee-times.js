const express = require('express');
const router = express.Router();
const { restoreUser } = require('../auth');
const db = require('../db/models');

// GET TEETIMES SPLASH PAGE //
router.get('/', (req, res) => {
  // const teeTimes = db.TeeTime.findAll({ order: ['dateTime'] });
  // res.render('tee-times', { title: TeeTimes, teeTimes });
  res.send('TeeTimes Splash Page')
})


// GET TEETIME BY ID //
router.get('/:id(\\d+)', restoreUser, (req, res) => {
  res.send('TeeTimes Event Page')
})


// GET CREATE TEETIME FORM //
router.get('/create', restoreUser, (req, res) => {
  res.send('Create New TeeTime Form')
})


// POST NEW TEETIME //
router.post('/', restoreUser, (req, res) => {
  
})

module.exports = router;