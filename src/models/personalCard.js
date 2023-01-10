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
  frontBgImage:{
    type: String,
    required: true,
  },
  frontBgColor:{
    type: String,
    required: true,
  },
  frontTitleColor:{
    type: String,
    required: true,
  },
  frontTextColor:{
    type: String,
    required: true,
  },
  frontSpanColor:{
    type: String,
    required: true,
  },
  frontPositions:{
    type: [],
    required: true,
  },
  backBgImage:{
    type: String,
    required: true,
  },
  backBgColor:{
    type: String,
    required: true,
  },
  backTitleColor:{
    type: String,
    required: true,
  },
  backTextColor:{
    type: String,
    required: true,
  },
  backSpanColor:{
    type: String,
    required: true,
  },
  backPositions:{
    type: [],
    required: true,
  },
  
})
module.exports = mongoose.model('PersonalCard', personalCardSchema)