const mongoose = require('mongoose')

const personalCardSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  frontBgImage: {
    type: String,
    required: false,
  },
  frontBgColor: {
    type: String,
    required: false,
  },
  frontTitleColor: {
    type: String,
    required: false,
  },
  frontTextColor: {
    type: String,
    required: false,
  },
  frontSpanColor: {
    type: String,
    required: false,
  },
  frontPositions: {
    type: [],
    required: false,
  },
  backBgImage: {
    type: String,
    required: false,
  },
  backBgColor: {
    type: String,
    required: false,
  },
  backTitleColor: {
    type: String,
    required: false,
  },
  backTextColor: {
    type: String,
    required: false,
  },
  backSpanColor: {
    type: String,
    required: false,
  },
  backPositions: {
    type: [],
    required: false,
  },

})
module.exports = mongoose.model('PersonalCard', personalCardSchema)