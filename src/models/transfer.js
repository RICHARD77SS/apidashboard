const mongoose = require('mongoose');

const transferSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: false,
  },
  value: {
    type: Number,
    required: false,
  },
  origin: {
    type: String,
    required: false,
  },
  destination: {
    type: String,
    required: false,
  },
  anotation: {
    type: String,
    required: false,
  }
})

module.exports = mongoose.model('Transfer', transferSchema);