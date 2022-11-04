const { validate: isUuid } = require('uuid');

const Meetings = require('../models/meetings');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'Invalid id' })
    }
    try {
      const meetings = await Meetings.findById(id);
      res.meetings = meetings;
      if (!meetings) {
        return res.status(404).json({ error: 'meeting not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}