const { validate: isUuid } = require('uuid')
const PhotoAlbum = require('../models/photoAlbum');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const photoAlbum = await PhotoAlbum.findById(id);
      res.photoAlbum = photoAlbum;
      if (!photoAlbum) {
        return res.status(404).json({ error: 'photoAlbum not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}