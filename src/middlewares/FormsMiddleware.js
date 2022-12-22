const { validate: isUuid } = require('uuid')
const Forms = require('../models/forms')

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' })
    }
    try {
      const forms = await Forms.findById(id);
      res.forms = forms;
      if (!forms) {
        return res.status(404).json({ error: 'Forms not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}