const { v4: uuid } = require('uuid')
const Schools = require('../models/schools');

module.exports = {
  async index(req, res) {
    try {
      const schools = await Schools.find();
      return res.status(200).json({ schools })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      name,
      description,
      managers,
      date
    } = req.body;
    if (!name) {
      return res.status(400).json({
        error: 'Missing name'
      })
    }
    const schools = new Schools({
      _id: uuid(),
      name,
      description,
      managers,
      date
    })
    try {
      await schools.save();
      return res.status(201).json({ message: 'schools added successfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },
  async update(req, res) {
    const {
      name,
      description,
      managers,
      date
    } = req.body;
    if (!name && !description && !managers && !date) {
      return res.status(200).json({ error: 'you must inform a new name or new description' })
    }
    if (name) res.schools.name = name;
    if (description) res.schools.description = description;
    if (managers) res.schools.managers = managers;
    if (date) res.schools.date = date;
    try {
      await res.schools.save();
      return res.status(200).json({ message: 'schools Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.schools.remove();
      return res.status(200).json({ message: 'schools deleted successfully!' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}