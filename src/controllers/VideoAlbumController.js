const { v4: uuid } = require('uuid');
const VideoAlbum = require('../models/videoAlbum');

module.exports = {
  async index(req, res) {
    try {
      const videoAlbum = await VideoAlbum.find();
      return res.status(200).json({ videoAlbum })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      name,
      description,
      media,
      title
    } = req.body;
    if (!name) {
      return res.status(400).json({
        error: 'Missing name '
      })
    }
    const videoAlbum = new VideoAlbum({
      _id: uuid(),
      name,
      description,
      media,
      title
    })
    try {
      await videoAlbum.save();
      return res.status(201).json({ message: 'videoAlbum added successfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req, res) {
    const {
      name,
      description,
      media,
      title
    } = req.body;
    if (!name && !description) {
      return res.status(200).json({
        error: 'you must inform a new name or new description'
      })
    }
    if (name) res.videoAlbum.name = name;
    if (description) res.videoAlbum.description = description;
    if (media) res.videoAlbum.media = media;
    if (title) res.videoAlbum.title = title;
    try {
      await res.videoAlbum.save();
      return res.status(200).json({ message: 'videoAlbum Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.videoAlbum.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
