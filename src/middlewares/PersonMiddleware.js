const { validate: isUuid } = require('uuid');
const Person = require('../models/person');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const person = await Person.findById(id);
      res.person = person;
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next();
  },
};