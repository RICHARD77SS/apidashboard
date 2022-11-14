const { validate: isUuid } = require('uuid');
const Schools = require('../models/schools');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'Invalid Id' })
    }
    try {
      const schools = await Schools.findById(id);
      res.schools = schools;
      if (!schools) {
        return res.status(404).json({ error: 'schools not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}