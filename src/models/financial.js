const mongoose = require('mongoose');

const financialSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  value: {
    type: Number,
    required: false,
  },
  paidOut: {
    type: String,
    required: false,
  },
  receivedFrom: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  account: {
    type: String,
    required: false,
  },
  costCenter: {
    type: String,
    required: false,
  },
  typeOfPayment: {
    type: String,
    required: false,
  },
  documentNumber: {
    type: String,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
  competence: {
    type: Date,
    required: false,
  },
  file: {
    type: String,
    required: false,
  },
  revenuesExpenses: {
    type: Boolean,
    required: true,
  }
})
module.exports = mongoose.model('Financial', financialSchema);