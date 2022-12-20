const { v4: uuid } = require('uuid');
const CategoryAnotations = require('../models/categoryAnotations');

module.exports = {
  async index(req, res) {
    try {
      const categoryAnotations = await CategoryAnotations.find();
      return res.status(200).json({ categoryAnotations })
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
    const categoryAnotations = new CategoryAnotations({
      _id: uuid(),
      name,
      description
    })
    try {
      await categoryAnotations.save();
      return res.status(201).json({ message: 'CategoryAnotations added successfully!' })
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
    if (name) res.categoryAnotations.name = name;
    if (description) res.categoryAnotations.description = description;
    try {
      await res.categoryAnotations.save();
      return res.status(200).json({ message: 'CategoryAnotations Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.categoryAnotations.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
