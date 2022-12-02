const { v4: uuid } = require('uuid');
const FinancialCategory = require('../models/financialCategory');

module.exports = {
  async index(req, res) {
    try {
      const financialCategory = await FinancialCategory.find();
      return res.status(200).json({ financialCategory })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      name,
      description,
      type
    } = req.body;
    if (!name) {
      return res.status(400).json({
        error: 'Missing name '
      })
    }
    const financialCategory = new FinancialCategory({
      _id: uuid(),
      name,
      description,
      type
    })
    try {
      await financialCategory.save();
      return res.status(201).json({ message: 'financialCategory added successfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req, res) {
    const {
      name,
      description,
      type
    } = req.body;
    if (!name && !description && !type) {
      return res.status(200).json({
        error: 'you must inform a new name or new description'
      })
    }
    if (name) res.financialCategory.name = name;
    if (description) res.financialCategory.description = description;
    if (type) res.financialCategory.type = type;
    try {
      await res.financialCategory.save();
      return res.status(200).json({ message: 'financialCategory Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.financialCategory.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
