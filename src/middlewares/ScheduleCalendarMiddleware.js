const { validate: isUuid } = require('uuid')
const ScheduleCalendar = require('../models/scheduleCalendar');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const scheduleCalendar = await ScheduleCalendar.findById(id);
      res.scheduleCalendar = scheduleCalendar;
      if (!scheduleCalendar) {
        return res.status(404).json({ error: 'scheduleCalendar not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}