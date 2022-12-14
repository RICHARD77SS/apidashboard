const mongoose = require('mongoose');

const muralsTextSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  textColor: {
    type: String,
    required: false,
  },
  backColor: {
    type: String,
    required: false,
  },
  backGround: {
    type: String,
    required: false,
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

module.exports = mongoose.model('MuralsText', muralsTextSchema);