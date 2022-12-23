const { validate: isUuid } = require('uuid')
const Documents = require('../models/documents');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const documents = await Documents.findById(id);
      res.documents = documents;
      if (!documents) {
        return res.status(404).json({ error: 'documents not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}