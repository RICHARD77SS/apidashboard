const { v4: uuid } = require('uuid');
const MuralsImage = require('../models/muralsImage');

module.exports = {
  async index(req, res) {
    try {
      const muralsImage = await MuralsImage.find();
      return res.status(200).json({ muralsImage })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      image,
      status,
      unpublish,
      link,
      notification,
    } = req.body;
    if (!image) {
      return res.status(400).json({
        error: 'Missing image '
      })
    }
    const muralsImage = new MuralsImage({
      _id: uuid(),
      image,
      status,
      unpublish,
      link,
      notification,
    })
    try {
      await muralsImage.save();
      return res.status(201).json({ message: 'muralsImage added successfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req, res) {
    const {
      image,
      status,
      unpublish,
      link,
      notification,
    } = req.body;
    if (!image
      && !status
      && !unpublish
      && !link
      && !notification) {
      return res.status(200).json({
        error: 'you must inform a new image or new description'
      })
    }
    if (image) res.muralsImage.image = image;
    if (status) res.muralsImage.status = status
    if (unpublish) res.muralsImage.unpublish = unpublish
    if (link) res.muralsImage.link = link
    if (notification) res.muralsImage.notification = notification
    try {
      await res.muralsImage.save();
      return res.status(200).json({ message: 'muralsImage Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.muralsImage.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
