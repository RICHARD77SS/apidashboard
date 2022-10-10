const { validate: isUuid } = require('uuid')
const ExtraFields = require('../models/extraFields');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const extraFields = await ExtraFields.findById(id);
      res.extraFields = extraFields;
      if (!extraFields) {
        return res.status(404).json({ error: 'Field not found' });
      }
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
    next()
  }
}