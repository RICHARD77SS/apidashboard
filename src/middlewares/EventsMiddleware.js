const { validate: isUuid } = require('uuid')
const Events = require('../models/events');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const events = await Events.findById(id);
      res.events = events;
      if (!events) {
        return res.status(404).json({ error: 'events not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}