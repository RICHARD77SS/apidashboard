const { validate: isUuid } = require('uuid')
const CategorySchedule = require('../models/categorySchedule');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const categorySchedule = await CategorySchedule.findById(id);
      res.categorySchedule = categorySchedule;
      if (!categorySchedule) {
        return res.status(404).json({ error: 'CategorySchedule not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}