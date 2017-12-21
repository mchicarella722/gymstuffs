const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    passwordSalt: {
      type: String,
      required: true,
    },
  });
  var User = mongoose.model('User', UserSchema);
  module.exports = UserLoginDBSchema;