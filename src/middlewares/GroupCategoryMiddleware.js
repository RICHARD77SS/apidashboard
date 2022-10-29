const { validate: isUuid } = require('uuid');
const GroupCategory = require('../models/groupCategory');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' })
    }
    try {
      const groupCategory = await GroupCategory.findById(id);
      res.groupCategory = groupCategory;
      if (!groupCategory) {
        return res.status(404).json({ error: 'GroupCategory not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}