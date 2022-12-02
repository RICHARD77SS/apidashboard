const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  _id: {
    type: String,
    required:true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  phone1: {
    type: Number,
    required: false,
  },
  phone2: {
    type: Number,
    required: false,
  },
  anotations: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model('Contact', contactSchema);