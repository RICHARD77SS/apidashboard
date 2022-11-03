const mongoose = require('mongoose')

const studiesCategorySchema = new mongoose.Schema({
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
  }
})

module.exports = mongoose.model('StudiesCategory', studiesCategorySchema)