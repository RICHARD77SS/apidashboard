const { validate: isUuid } = require('uuid')
const VideoAlbum = require('../models/videoAlbum');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const videoAlbum = await VideoAlbum.findById(id);
      res.videoAlbum = videoAlbum;
      if (!videoAlbum) {
        return res.status(404).json({ error: 'videoAlbum not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}