const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
  name: String,
  description: String,
  image: String,
  user: [],
  events: [],
});

module.exports = mongoose.model('Group', groupSchema);
