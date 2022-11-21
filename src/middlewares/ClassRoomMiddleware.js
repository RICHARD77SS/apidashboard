const { validate: isUuid } = require('uuid')
const ClassRoom = require('../models/classroom');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const classRoom = await ClassRoom.findById(id);
      res.classRoom = classRoom;
      if (!classRoom) {
        return res.status(404).json({ error: 'classroom not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}