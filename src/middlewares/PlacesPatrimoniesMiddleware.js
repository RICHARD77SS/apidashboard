const { validate: isUuid } = require('uuid')
const PlacesPatrimonies = require('../models/placesPatrimonies');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: 'invalid Id' });
    }
    try {
      const placesPatrimonies = await PlacesPatrimonies.findById(id);
      res.placesPatrimonies = placesPatrimonies;
      if (!placesPatrimonies) {
        return res.status(404).json({ error: 'placesPatrimonies not found' })
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next()
  }
}