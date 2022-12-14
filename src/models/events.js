const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  subName: {
    type: String,
    required: false,
  },
  startDate: {
    type: Date,
    required: false,
  },
  endDate: {
    type: Date,
    required: false,
  },
  notification: {
    type: Boolean,
    required: false,
  },
  payment: {
    type: Boolean,
    required: false,
  },
  value: {
    type: Number,
    required: false,
  },
  numberOfVacancies: {
    type: Number,
    required: false,
  },
  formOfPayment: {
    type: String,
    required: false,
  },
  schedule: {
    type: {},
    required: false,
  },
  aboutTheEvent: {
    type: String,
    required: false,
  },
  place: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  speakers: {
    type: {},
    required: false,
  },
})

module.exports = mongoose.model('Events', eventsSchema);