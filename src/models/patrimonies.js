const mongoose = require('mongoose');

const patrimoniesSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  place: {
    type: String,
    required: false,
  },
  situation: {
    type: String,
    required: false,
  },
  conservation: {
    type: String,
    required: false,
  },
  origin: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  purchaseDate: {
    type: Date,
    required: false,
  },
  docNumber: {
    type: Number,
    required: false,
  },
  lifeCycle: {
    type: Number,
    required: false,
  },
  observation: {
    type: String,
    required: false,
  },
  amount: {
    type: Number,
    required: false,
  },
})

module.exports = mongoose.model('Patrimonies', patrimoniesSchema);
