const { v4: uuid } = require('uuid');
const PhotoAlbum = require('../models/photoAlbum');

module.exports = {
  async index(req, res) {
    try {
      const photoAlbum = await PhotoAlbum.find();
      return res.status(200).json({ photoAlbum })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      name,
      description,
      media
    } = req.body;
    if (!name) {
      return res.status(400).json({
        error: 'Missing name '
      })
    }
    const photoAlbum = new PhotoAlbum({
      _id: uuid(),
      name,
      description,
      media
    })
    try {
      await photoAlbum.save();
      return res.status(201).json({ message: 'photoAlbum added successfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req, res) {
    const {
      name,
      description,
      media
    } = req.body;
    if (!name && !description) {
      return res.status(200).json({
        error: 'you must inform a new name or new description'
      })
    }
    if (name) res.photoAlbum.name = name;
    if (description) res.photoAlbum.description = description;
    if (media) res.photoAlbum.media = media;
    try {
      await res.photoAlbum.save();
      return res.status(200).json({ message: 'photoAlbum Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.photoAlbum.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
