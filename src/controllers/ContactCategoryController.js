const { v4: uuid } = require('uuid');
const ContactCategory = require('../models/contactCategory');

module.exports = {
  async index(req, res) {
    try {
      const contactCategory = await ContactCategory.find();
      return res.status(200).json({ contactCategory })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      name,
      description
    } = req.body;
    if (!name) {
      return res.status(400).json({
        error: 'Missing name '
      })
    }
    const contactCategory = new ContactCategory({
      _id: uuid(),
      name,
      description
    })
    try {
      await contactCategory.save();
      return res.status(201).json({ message: 'contactCategory added successfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req, res) {
    const {
      name,
      description
    } = req.body;
    if (!name && !description) {
      return res.status(200).json({
        error: 'you must inform a new name or new description'
      })
    }
    if (name) res.contactCategory.name = name;
    if (description) res.contactCategory.description = description;
    try {
      await res.contactCategory.save();
      return res.status(200).json({ message: 'contactCategory Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.contactCategory.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
