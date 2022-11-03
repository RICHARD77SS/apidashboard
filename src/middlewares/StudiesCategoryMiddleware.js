const { validate: isUuid } = require('uuid');
const StudiesCategory = require('../models/studiesCategory');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'Invalid Id' })
    }
    try {
      const studiesCategory = await StudiesCategory.findById(id);
      res.studiesCategory = studiesCategory;
      if (!studiesCategory) {
        return res.status(404).json({ error: 'studies Category not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}