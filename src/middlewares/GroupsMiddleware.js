const { validate: isUuid } = require('uuid');
const Groups = require('../models/groups');

module.exports = {
  async validateId(req, res, next) {
    const { id } = req.params;
    if (!isUuid(id)) {
      return res.status(400).json({ error: "invalid Id" });
    }
    try {
      const groups = await Groups.findById(id);
      if (!groups) {
        return res.status(404).json({ error: "Group not found" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
    next();
  },
};