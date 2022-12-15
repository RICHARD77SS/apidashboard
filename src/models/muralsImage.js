const mongoose = require('mongoose');

const muralsImageSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  image: {
    type: {},
    required: true,
  },
  status: {
    type: String,
    required: false,
  },
  unpublish: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
  notification: {
    type: Boolean,
    required: false,
  },
})

module.exports = mongoose.model('MuralsImage', muralsImageSchema);