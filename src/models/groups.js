const mongoose = require('mongoose')

const groupsSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  bg: {
    type: String,
    required: false,
  },
  creationDate: {
    type: Date,
    required: false,
  },
  weekDay: {
    type: String,
    required: false,
  },
  sex: {
    type: String,
    required: false,
  },
  time: {
    type: String,
    required: false,
  },
  category: {
    type: [],
    required: false,
  },
  originGroup: {
    type: String,
    required: false,
  },
  lider1: {
    type: {},
    required: false,
  },
  lider2: {
    type: {},
    required: false,
  },
  lider3: {
    type: {},
    required: false,
  },
  lider4: {
    type: {},
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  district: {
    type: String,
    required: false,
  },
  number: {
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
  anotations: {
    type: String,
    required: false,
  },
  participants: {
    type: {},
    required: false,
  }
})

module.exports = mongoose.model('Groups', groupsSchema)