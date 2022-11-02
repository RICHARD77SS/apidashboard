const { v4: uuid } = require('uuid');

const Studies = require('../models/studies');

module.exports = {
  async index(req, res) {
    try {
      const studies = await Studies.find();
      return res.status(200).json({ studies })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      name,
      category,
      content,
      image,
      file,
      notification
    } = req.body;
    if (!name) {
      return res.status(400).json({
        error: 'Missing name'
      })
    }
    const studies = new Studies({
      _id:uuid(),
      name,
      category,
      content,
      image,
      file,
      notification: false
    })
    try {
      await studies.save();
      return res.status(201).json({ message: 'Studies added successfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req, res) {
    const {
      name,
      category,
      content,
      image,
      file,
      notification
    } = req.body;
    if (
      !name
      && !category
      && !content
      && !image
      && !file
      && !notification
    ) {
      return res.status(200).json({
        error: 'You must inform a new info'
      })
    }
    if (name) res.studies.name = name;
    if (category) res.studies.category = category;
    if (content) res.studies.content = content;
    if (image) res.studies.image = image;
    if (file) res.studies.file = file;
    if (notification) res.studies.notification = notification;
    try {
      await res.studies.save()
      return res.status(200).json({ message: 'Studies updated successfully!' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.studies.remove();
      return res.status(200).json({ message: 'delete successfully!' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}