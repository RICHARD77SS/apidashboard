const { validate: isUuid } = require('uuid')
const MuralsImage = require('../models/muralsImage');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const muralsImage = await MuralsImage.findById(id);
      res.muralsImage = muralsImage;
      if (!muralsImage) {
        return res.status(404).json({ error: 'muralsImage not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}