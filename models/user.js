const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  description: String,
  password: String,
  groups: [],
});

module.exports = mongoose.model('User', userSchema);
