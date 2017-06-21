const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  name: String,
  description: String,
  location: String,
  date: Date,
  owner: String,
  groups: [],
});

module.exports = mongoose.model('Event', eventSchema);
