const mongoose = require('mongoose')

const classRoomSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: false,
  },
  discipline: {
    type: String,
    required: false,
  },
  topic: {
    type: String,
    required: false,
  },
  remarks: {
    type: String,
    required: false,
  },
  participants: {
    type: [],
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model('ClassRoom', classRoomSchema)