const { v4: uuid } = require('uuid');
const GroupCategory = require('../models/groupCategory');

module.exports = {
  async index(req, res) {
    try {
      const groupCategory = await GroupCategory.find();
      return res.status(200).json({ groupCategory })
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
        error: 'Missing name'
      })
    }
    const groupCategory = new GroupCategory({
      _id: uuid(),
      name,
      description
    })
    try {
      await groupCategory.save();
      return res.status(201).json({ message: 'Group category added successfully!' });
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
        error: 'you must Inform a new nam,e or new description'
      })
    }
    if (name) res.groupCategory.name = name;
    if (description) res.groupCategory.description = description;
    try {
      await res.groupCategory.save()
      return res.status(200).json({ message: 'Category Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.groupCategory.remove();
      return res.status(200).json({ message: 'Deleted successfully!' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}