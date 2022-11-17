const { validate: isUuid } = require('uuid')
const Claass = require('../models/claass');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const claass = await Claass.findById(id);
      res.claass = claass;
      if (!claass) {
        return res.status(404).json({ error: 'claass not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}