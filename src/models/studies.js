const mongoose = require('mongoose');

const studiesSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  file: {
    type: String,
    required: false,
  },
  notification: {
    type: Boolean,
    required: false,
  },
  date: {
    type: Date,
    required: true,
  }
})

module.exports = mongoose.model('Studies', studiesSchema);