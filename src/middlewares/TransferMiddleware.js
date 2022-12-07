const { validate: isUuid } = require('uuid')
const Transfer = require('../models/transfer');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const transfer = await Transfer.findById(id);
      res.transfer = transfer;
      if (!transfer) {
        return res.status(404).json({ error: 'transfer not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}