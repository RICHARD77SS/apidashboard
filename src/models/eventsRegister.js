const mongoose = require('mongoose');

const eventsRegisterSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  evento: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  phone: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  number: {
    type: Number,
    required: false,
  },
  district: {
    type: String,
    required: false,
  },
  zipCode: {
    type: Number,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  payment: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: false,
  }
})

module.exports = mongoose.model('EventsRegister', eventsRegisterSchema);