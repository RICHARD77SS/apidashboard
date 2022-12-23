const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  caption: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
  notification: {
    type: Boolean,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  additionalFields: {
    type: [],
    required: false,
  },
  date: {
    type: Date,
    required:false,
  }
})
module.exports = mongoose.model('Form', formSchema)