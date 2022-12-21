const mongoose = require('mongoose');

const videoAlbumSchema = new mongoose.Schema({
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
  },
  media: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  }
})

module.exports = mongoose.model('VideoAlbum', videoAlbumSchema);