const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  birth: {
    type: Date,
    required: false,
  },
  sex: {
    type: String,
    required: false,
  },
  schooling: {
    type: String,
    required: false,
  },
  marital: {
    type: String,
    required: false,
  },
  document1: {
    type: Number,
    required: false,
  },
  document2: {
    type: Number,
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
  address: {
    type: String,
    required: false,
  },
  number: {
    type: Number,
    required: false,
  },
  district: {
    type: String,
    required: false,
  },
  zipcode: {
    type: Number,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  group: {
    type: [],
    required: false,
  },
  category: {
    type: [],
    required: false,
  },
  office: {
    type: [],
    required: false,
  },
  conversion: {
    type: Date,
    required: false,
  },
  baptized: {
    type: String,
    required: false,
  },
  baptismDate: {
    type: Date,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
  registerDate: {
    type: Date,
    required: false,
  },
  spouse: {
    type: String,
    required: false,
  },
  convertedSpouse: {
    type: String,
    required: false,
  },
  ageGroup: {
    type: String,
    required: false,
  },
  age: {
    type: String,
    required: false,
  },
  additionalField: {
    type: [],
    required: false,
  }
});

module.exports = mongoose.model('Person', personSchema);