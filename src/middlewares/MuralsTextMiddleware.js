const { validate: isUuid } = require('uuid')
const MuralsText = require('../models/muralsText');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const muralsText = await MuralsText.findById(id);
      res.muralsText = muralsText;
      if (!muralsText) {
        return res.status(404).json({ error: 'muralsText not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}