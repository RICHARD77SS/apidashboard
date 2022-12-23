const { v4: uuid } = require('uuid');
const Documents = require('../models/documents');

module.exports = {
  async index(req, res) {
    try {
      const documents = await Documents.find();
      return res.status(200).json({ documents })
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
    const documents = new Documents({
      _id: uuid(),
      name,
      description
    })
    try {
      await documents.save();
      return res.status(201).json({ message: 'documents added successfully!' })
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
    if (name) res.documents.name = name;
    if (description) res.documents.description = description;
    try {
      await res.documents.save();
      return res.status(200).json({ message: 'documents Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.documents.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
