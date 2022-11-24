const mongoose = require('mongoose')

const claassSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: false,
  },
  time: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: false,
  },
  participants: {
    type: [],
    required: false,
  }
})

module.exports = mongoose.model('Claass', claassSchema)