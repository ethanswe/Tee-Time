const express = require('express');
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const router = express.Router();

router.get('/signup',
    csrfProtection,
    asyncHandler(async (req, res) => {
        // const user = await db.User.findAll();
        res.render('signup', { title: 'Sign Up', csrfToken: req.csrfToken(), });
    })
);

// router.post('/signup'),
module.exports = router;