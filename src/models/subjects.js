const mongoose = require('mongoose')

const subjectsSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: false,
  },
  classIndex: {
    type: Number,
    required: false,
  }
})

module.exports = mongoose.model('Subjects', subjectsSchema)