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
    type: String,
    required: false,
  },
  originGroup: {
    type: String,
    required: false,
  },
  lider1: {
    type: String,
    required: false,
  },
  ldier2: {
    type: String,
    required: false,
  },
  lider3: {
    type: String,
    required: false,
  },
  lider4: {
    type: String,
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
})

module.exports = mongoose.model('Groups', groupsSchema)