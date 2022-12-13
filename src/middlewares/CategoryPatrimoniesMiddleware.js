const { validate: isUuid } = require('uuid')
const CategoryPatrimonies = require('../models/categoryPatrimonies');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const categoryPatrimonies = await CategoryPatrimonies.findById(id);
      res.categoryPatrimonies = categoryPatrimonies;
      if (!categoryPatrimonies) {
        return res.status(404).json({ error: 'CategoryPatrimonies not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}