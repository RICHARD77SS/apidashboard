const { validate: isUuid } = require('uuid')
const Account = require('../models/account');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const account = await Account.findById(id);
      res.account = account;
      if (!account) {
        return res.status(404).json({ error: 'account not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}