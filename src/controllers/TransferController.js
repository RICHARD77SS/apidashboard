const { v4: uuid } = require('uuid');
const Transfer = require('../models/transfer');

module.exports = {
  async index(req, res) {
    try {
      const transfer = await Transfer.find();
      return res.status(200).json({ transfer })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      date,
      value,
      origin,
      destination,
      anotation
    } = req.body;
    if (!date) {
      return res.status(400).json({
        error: 'Missing date '
      })
    }
    const transfer = new Transfer({
      _id: uuid(),
      date,
      value,
      origin,
      destination,
      anotation
    })
    try {
      await transfer.save();
      return res.status(201).json({ message: 'transfer added successfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req, res) {
    const {
      date,
      value,
      origin,
      destination,
      anotation
    } = req.body;
    if (!date && !value && !origin && !destination && !anotation) {
      return res.status(200).json({
        error: 'you must inform a new date or new value'
      })
    }
    if (date) res.transfer.date = date;
    if (value) res.transfer.value = value;
    if (origin) res.transfer.origin = origin;
    if (destination) res.transfer.destination = destination;
    if (anotation) res.transfer.anotation = anotation;
    try {
      await res.transfer.save();
      return res.status(200).json({ message: 'transfer Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.transfer.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
