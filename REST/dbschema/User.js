

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


var UserSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: false,
      trim: true
    },
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
    },
  });

  var User = module.exports = mongoose.model('User', UserSchema);
  
  module.exports.getUserbyId = function(id,callback){
    User.findById(id,callback);
  }
  
  module.exports.getUserbyUsername = function(username,callback){
    const query = {username:username}
    User.findByUsername(username, callback);
  }

  module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err) throw err;
        newUser.password = hash;
        newUser.save(callback())
      });
    });
  }

   