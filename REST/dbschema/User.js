

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
    height: {
      type: Number,
      required: false
    },
    weight: {
      type: Number,
      required: false
    },
    name: { 
      type: String,
      required: false
    },
    hometown: {
      type: String,
      required: false
    },
    birthday: {
      type: Date,
      required: false
    }
  });

  var User = module.exports = mongoose.model('User', UserSchema);
  
  module.exports.getUserbyId = function(id,callback){
    User.findById(id,callback);
  }
  
  module.exports.getUserByUsername = function(username,callback){
    const query = {username:username}
    User.findOne(query, callback);
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

module.exports.comparePassword =  function(cPassword, hash, callback){
  bcrypt.compare(cPassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null,isMatch);
  });
module.exports.updateUserProfile = function(existingUser, callback){
  existingUser.save(callbacK());
}
}
   