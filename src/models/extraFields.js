const mongoose = require('mongoose');

const extraFieldsSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  inputName: {
    type: String,
    required: true,
  },
  inputType: {
    type: String,
    required: true,
  },
  inputOption: {
    type: {},
    required: true,
  }
})

module.exports = mongoose.model('ExtraFields', extraFieldsSchema);