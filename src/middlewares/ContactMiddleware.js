const { validate: isUuid } = require('uuid')
const Contact = require('../models/contact');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const contact = await Contact.findById(id);
      res.contact = contact;
      if (!contact) {
        return res.status(404).json({ error: 'Contact not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}