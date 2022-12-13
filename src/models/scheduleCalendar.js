const mongoose = require('mongoose');

const scheduleCalendarSchema = new mongoose.Schema({
  _id: {
    type: String,
    requred: true,
  },
  name: {
    type: String,
    required:true,
  },
  visibility: {
    type: String,
    required:false,
  },
  startDate: {
    type: Date,
    required: false,
  },
  startHour: {
    type: Number,
    required: false,
  },
  endDate: {
    type: Date,
    required: false,
  },
  endHour: {
    type: Number,
    required: false,
  },
  repeat: {
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
  anotations: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model('ScheduleCalendar',scheduleCalendarSchema)