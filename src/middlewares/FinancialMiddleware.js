const { validate: isUuid } = require('uuid');
const Financial = require('../models/financial')

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalidId' });
    }
    try {
      const financial = await Financial.findById(id);
      res.financial = financial;
      if (!financial) {
        return res.status(404).json({ error: 'financial not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}