const { v4: uuid } = require('uuid')
const StudiesCategory = require('../models/studiesCategory');

module.exports = {
  async index(req, res) {
    try {
      const studiesCategory = await StudiesCategory.find();
      return res.status(200).json({ studiesCategory })
    } catch (error) {
      res.statsu(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      name,
      description
    } = req.body;
    if (!name) {
      return res.status(400).json({
        error: 'Missing name'
      })
    }
    const studiesCategory = new StudiesCategory({
      _id: uuid(),
      name,
      description
    })
    try {
      await studiesCategory.save();
      return res.status(201).json({ message: 'Studies Category added successfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },
  async update(req, res) {
    const {
      name,
      description
    } = req.body;
    if (!name && !description) {
      return res.status(200).json({ error: 'you must inform a new name or new description' })
    }
    if (name) res.studiesCategory.name = name;
    if (description) res.studiesCategory.description = description;
    try {
      await res.studiesCategory.save();
      return res.status(200).json({ message: 'Studies category Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.studiesCategory.remove();
      return res.status(200).json({ message: 'Studies category deleted successfully!' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}