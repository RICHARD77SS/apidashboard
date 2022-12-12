const { validate: isUuid } = require('uuid')
const Patrimonies = require('../models/patrimonies');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const patrimonies = await Patrimonies.findById(id);
      res.patrimonies = patrimonies;
      if (!patrimonies) {
        return res.status(404).json({ error: 'patrimonies not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}