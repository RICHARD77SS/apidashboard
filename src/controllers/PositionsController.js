const { v4: uuid } = require('uuid');
const Positions = require('../models/positions');

module.exports = {
  async index(req, res) {
    try {
      const positions = await Positions.find();
      return res.status(200).json({ positions })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      name
    } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Missing Name" })
    }
    const positions = new Positions({
      _id: uuid(),
      name
    })
    try {
      await positions.save();
      return res.status(201).json({ message: 'Position added successfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req, res) {
    const {
      name
    } = req.body;
    if (!name) {
      return res.status(200).json({ error: 'You must inform a new name' })
    }
    if (name) res.positions.name = name;
    try {
      await res.positions.save();
      return res.status(200).json({ message: 'Position Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.positions.remove();
      return res.status(200).json({ message: 'Deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}