const { v4: uuid } = require('uuid');
const MuralsText = require('../models/muralsText');

module.exports = {
  async index(req, res) {
    try {
      const muralsText = await MuralsText.find();
      return res.status(200).json({ muralsText })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      name,
      description,
      textColor,
      backColor,
      background,
      status,
      unpublish,
      link,
      notification,
    } = req.body;
    if (!name) {
      return res.status(400).json({
        error: 'Missing name '
      })
    }
    const muralsText = new MuralsText({
      _id: uuid(),
      name,
      description,
      textColor,
      backColor,
      background,
      status,
      unpublish,
      link,
      notification,
    })
    try {
      await muralsText.save();
      return res.status(201).json({ message: 'muralsText added successfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req, res) {
    const {
      name,
      description,
      textColor,
      backColor,
      background,
      status,
      unpublish,
      link,
      notification,
    } = req.body;
    if (!name
      && !description
      && !textColor
      && !backColor
      && !background
      && !status
      && !unpublish
      && !link
      && !notification) {
      return res.status(200).json({
        error: 'you must inform a new name or new description'
      })
    }
    if (name) res.muralsText.name = name;
    if (description) res.muralsText.description = description;
    if (textColor) res.muralsText.textColor=textColor
      if (backColor) res.muralsText.backColor=backColor
      if (background) res.muralsText.background=background
      if (status) res.muralsText.status=status
      if (unpublish) res.muralsText.unpublish=unpublish
      if (link) res.muralsText.link=link
      if (notification) res.muralsText.notification=notification
    try {
      await res.muralsText.save();
      return res.status(200).json({ message: 'muralsText Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.muralsText.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
