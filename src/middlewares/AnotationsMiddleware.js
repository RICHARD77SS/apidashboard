const { validate: isUuid } = require('uuid')
const Anotations = require('../models/anotations');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const anotations = await Anotations.findById(id);
      res.anotations = anotations;
      if (!anotations) {
        return res.status(404).json({ error: 'anotations not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}