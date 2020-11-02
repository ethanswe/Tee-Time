const express = require('express');
const db = require('../db/models');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');

router.get('/signup',
    // csrfProtection,
    asyncHandler(async (req, res) => {
        // const user = await db.User.findAll();
        res.render('signup', { title: 'Sign Up'});
        // res.send('hello world!');
    })
);

module.exports = router;