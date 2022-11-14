const mongoose = require('mongoose');

const schoolsSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  managers: {
    type: [],
    required: false,
  },
  date: {
    type: Date,
    required: false,
  }
})

module.exports = mongoose.model('Schools', schoolsSchema);