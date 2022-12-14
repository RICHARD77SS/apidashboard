const { v4: uuid } = require('uuid');
const CategorySchedule = require('../models/categorySchedule');

module.exports = {
  async index(req, res) {
    try {
      const categorySchedule = await CategorySchedule.find();
      return res.status(200).json({ categorySchedule })
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
    const categorySchedule = new CategorySchedule({
      _id: uuid(),
      name,
      description
    })
    try {
      await categorySchedule.save();
      return res.status(201).json({ message: 'CategorySchedule added successfully!' })
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
    if (name) res.categorySchedule.name = name;
    if (description) res.categorySchedule.description = description;
    try {
      await res.categorySchedule.save();
      return res.status(200).json({ message: 'CategorySchedule Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.categorySchedule.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
