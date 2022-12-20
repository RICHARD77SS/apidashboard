const { v4: uuid } = require('uuid');
const Anotations = require('../models/anotations');

module.exports = {
  async index(req, res) {
    try {
      const anotations = await Anotations.find();
      return res.status(200).json({ anotations })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      name,
      description,
      category
    } = req.body;
    if (!name) {
      return res.status(400).json({
        error: 'Missing name '
      })
    }
    const anotations = new Anotations({
      _id: uuid(),
      name,
      description,
      category
    })
    try {
      await anotations.save();
      return res.status(201).json({ message: 'anotations added successfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req, res) {
    const {
      name,
      description,
      category
    } = req.body;
    if (!name && !description && !category) {
      return res.status(200).json({
        error: 'you must inform a new name or new description'
      })
    }
    if (name) res.anotations.name = name;
    if (description) res.anotations.description = description;
    if (category) res.anotations.category = category;
    try {
      await res.anotations.save();
      return res.status(200).json({ message: 'anotations Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.anotations.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
