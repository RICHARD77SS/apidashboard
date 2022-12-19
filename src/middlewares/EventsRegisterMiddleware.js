const { validate: isUuid } = require('uuid')
const EventsRegister = require('../models/eventsRegister');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const eventsRegister = await EventsRegister.findById(id);
      res.eventsRegister = eventsRegister;
      if (!eventsRegister) {
        return res.status(404).json({ error: 'eventsRegister not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}