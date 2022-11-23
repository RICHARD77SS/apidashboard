const { validate: isUuid } = require('uuid');
const Orientation = require('../models/orientation');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'Invalid Id' })
    }
    try {
      const orientation = await Orientation.findById(id);
      res.orientation = orientation;
      if (!orientation) {
        return res.status(404).json({ error: 'Subjects not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}