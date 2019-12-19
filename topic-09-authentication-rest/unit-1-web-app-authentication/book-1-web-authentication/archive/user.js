'use strict';

const Boom = require('boom');
const Mongoose = require('mongoose');
const bcrypt = require('bcrypt');     // ADDED

const Schema = Mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

userSchema.statics.findByEmail = function(email) {
  return this.findOne({ email : email});
};

userSchema.methods.comparePassword = async function(candidatePassword) {     // EDITED
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = Mongoose.model('User', userSchema);
