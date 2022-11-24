const mongoose = require('mongoose')

const orientationSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
  lideres: {
    type: [],
    required: false,
  },
  anotations: {
    type: String,
    required: false,
  },
  people: {
    type: [],
    required: false,
  },
  meetings: [{
    subject: String,
    description: String,
    date: Date,
    startTime: Number,
    duration: String,
    place: String,
    statusMeeting: String,
  }]
})

module.exports = mongoose.model('Orientation', orientationSchema)