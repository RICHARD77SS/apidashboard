const { v4: uuid } = require('uuid');
const PlacesPatrimonies = require('../models/placesPatrimonies');

module.exports = {
  async index(req, res) {
    try {
      const placesPatrimonies = await PlacesPatrimonies.find();
      return res.status(200).json({ placesPatrimonies })
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
    const placesPatrimonies = new PlacesPatrimonies({
      _id: uuid(),
      name,
      description
    })
    try {
      await placesPatrimonies.save();
      return res.status(201).json({ message: 'placesPatrimonies added successfully!' })
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
    if (name) res.placesPatrimonies.name = name;
    if (description) res.placesPatrimonies.description = description;
    try {
      await res.placesPatrimonies.save();
      return res.status(200).json({ message: 'placesPatrimonies Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.placesPatrimonies.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
