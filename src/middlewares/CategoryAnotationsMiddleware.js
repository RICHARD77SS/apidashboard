const { validate: isUuid } = require('uuid')
const Category = require('../models/category');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const category = await Category.findById(id);
      res.category = category;
      if (!category) {
        return res.status(404).json({ error: 'Category not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}