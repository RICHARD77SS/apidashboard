const Upload = require('../models/upload')

module.exports = {
  async index(req, res) {
    try {
      const { originalname: name, size, filename: key } = req.file;
      const upload = await Upload.create({
        name,
        size,
        key,
        url: '',
      })
      return res.json(upload)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}