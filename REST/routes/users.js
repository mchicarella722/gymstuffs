const express = require('express');
const router = express.Router();
const User = require('../dbschema/User');
const pport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

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
       const username = req.body.username;
       const password = req.body.password;

       User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
          return res.json({success: false, msg: 'User not found'});
        } 

       User.comparePassword(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch){    
          const token = jwt.sign(user, config.secret, {
            expiresIn: 604800 // 1 week
          });
  
          res.json({
            success: true,
            token: 'JWT '+token,
            user: {
              id: user._id,
              name: user.name,
              username: user.username,
              email: user.email
            }
          });
        } else {
          return res.json({success: false, msg: 'Wrong password'});
        }
      });
    });
 });
router.get('/profile', (req, res, next)=>
    {
        res.json({user: req.user})
    });
router.post('/updateProfile', pport.authenticate('jwt', {session:false}), (req, res, next)=>
    {
        user=User.getUserByUsername(req.body.username,(err, user) => {
            if(err) throw err;
            if(!user){
              return res.json({success: false, msg: 'User not found'});
            }
        });
        user.email = req.body.email;
        user.username = req.body.username;
        user.height = req.body.height;
        user.weight = req.body.weight;
        user.name = req.body.name;
        user.hometown = req.body.hometown;
        user.birthday = req.body.birthday;

        User.updateUserProfile(user,(err,user) => {
            if(err){
                res.json({success: false, msg: 'Failed to update User'});
            } else {
                res.json({success: true, msg: 'Updated Successfully'});
            }
        });
    });

router.post('/userSearch',(req, res)=>
{
    var regex = new RegExp(req.body.query+'*', 'i');

    var query = User.find({'username': regex}, function(err,docs){
        
    });
        
     // Execute query in a callback and return users list
    query.exec(function(err, users) {
        if (!err) {
            // Method to construct the json result set
                res.send(users, {
                    'Content-Type': 'application/json'
                }, 200);
        } else {
            res.send(JSON.stringify(err), {
                'Content-Type': 'application/json'
            }, 404);
        }
    });
});

module.exports = router;