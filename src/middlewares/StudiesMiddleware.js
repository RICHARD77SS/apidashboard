const { validate: isUuid } = require('uuid')
const Studies = require('../models/studies');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const studies = await Studies.findById(id);
      res.studies = studies;
      if (!studies) {
        return res.status(404).json({ error: 'studies not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}