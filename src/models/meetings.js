const mongoose = require('mongoose')

const meetingsSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  group: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: false,
  },
  participants: {
    type: [],
    required: false,
  },
  visitors: {
    type: [],
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model('meetings', meetingsSchema);