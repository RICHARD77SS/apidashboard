const { validate: isUuid } = require('uuid');
const Positions = require('../models/positions')

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalidId' });
    }
    try {
      const positions = await Positions.findById(id);
      res.positions = positions;
      if (!positions) {
        return res.status(404).json({ error: 'Position not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}
