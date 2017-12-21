
const express = require('express');
const router = express.Router();
const User = require('../dbschema/User');
const pport = require('passport');
const token = require('jsonwebtoken');

router.post('/register', (req, res, next)=>
    {
        let newUser = new User({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });

    User.addUser(newUser, (err,user) => {
        if(err){
            res.json({success: false, msg: 'Failed to Register User'});
        } else {
            res.json({success: true, msg: 'Registered Successfully'});
        }
    });
});

router.post('/auth', (req, res, next)=>
    {
        res.send('AUTH');
    }
);

router.get('/profile', (req, res, next)=>
    {
        res.send('PROFILE');
    }
);

module.exports = router;