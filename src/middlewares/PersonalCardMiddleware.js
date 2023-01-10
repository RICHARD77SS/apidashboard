const { validate: isUuid } = require('uuid')
const PersonalCard = require('../models/personalCard');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const personalCard = await PersonalCard.findById(id);
      res.personalCard = personalCard;
      if (!personalCard) {
        return res.status(404).json({ error: 'patrimonies not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}