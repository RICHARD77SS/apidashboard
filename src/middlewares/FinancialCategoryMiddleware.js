const { validate: isUuid } = require('uuid')
const FinancialCategory = require('../models/financialCategory');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const financialCategory = await FinancialCategory.findById(id);
      res.financialCategory = financialCategory;
      if (!financialCategory) {
        return res.status(404).json({ error: 'FinancialCategory not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}