const { v4: uuid } = require('uuid');
const CustCenter = require('../models/custCenter');

module.exports = {
  async index(req, res) {
    try {
      const custCenter = await CustCenter.find();
      return res.status(200).json({ custCenter })
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
    const custCenter = new CustCenter({
      _id: uuid(),
      name,
      description
    })
    try {
      await custCenter.save();
      return res.status(201).json({ message: 'custCenter added successfully!' })
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
    if (name) res.custCenter.name = name;
    if (description) res.custCenter.description = description;
    try {
      await res.custCenter.save();
      return res.status(200).json({ message: 'custCenter Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.custCenter.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
