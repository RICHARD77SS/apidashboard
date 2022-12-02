const { validate: isUuid } = require('uuid')
const CustCenter = require('../models/custCenter');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const custCenter = await CustCenter.findById(id);
      res.custCenter = custCenter;
      if (!custCenter) {
        return res.status(404).json({ error: 'custCenter not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}