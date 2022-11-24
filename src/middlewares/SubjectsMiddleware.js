const { validate: isUuid } = require('uuid');
const Subjects = require('../models/subjects');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'Invalid Id' })
    }
    try {
      const subjects = await Subjects.findById(id);
      res.subjects = subjects;
      if (!subjects) {
        return res.status(404).json({ error: 'subjects not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}