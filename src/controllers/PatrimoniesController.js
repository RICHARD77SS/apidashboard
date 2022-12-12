const { v4: uuid } = require('uuid');

const Patrimonies = require('../models/patrimonies');

module.exports = {
  async index(req, res) {
    try {
      const patrimonies = await Patrimonies.find();
      return res.status(200).json({ patrimonies })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      name,
      code,
      category,
      place,
      situation,
      conservation,
      origin,
      price,
      purchaseDate,
      docNumber,
      lifeCycle,
      observation,
      amount
    } = req.body;
    if (!name) {
      return res.status(400).json({
        error: 'Missing name'
      })
    }
    const patrimonies = new Patrimonies({
      _id: uuid(),
      name,
      code,
      category,
      place,
      situation,
      conservation,
      origin,
      price,
      purchaseDate,
      docNumber,
      lifeCycle,
      observation,
      amount
    })
    try {
      await patrimonies.save();
      return res.status(201).json({ message: 'Patrimonies added successfully!' })
    } catch (error) {
      res.status(400).json({
        error: error.message
      });
    }
  },
  async update(req, res) {
    const {
      name,
      code,
      category,
      place,
      situation,
      conservation,
      origin,
      price,
      purchaseDate,
      docNumber,
      lifeCycle,
      observation,
      amount
    } = req.body;
    if (!name
      && !code
      && !category
      && !place
      && !situation
      && !conservation
      && !origin
      && !price
      && !purchaseDate
      && !docNumber
      && !lifeCycle
      && !observation
      && !amount) {
      return res.status(200).json({
        error: 'you must inform a new name or new info'
      })
    }
    if (name) res.patrimonies.name = name;
    if (code) res.patrimonies.code = code;
    if (category) res.patrimonies.category = category;
    if (place) res.patrimonies.place = place;
    if (situation) res.patrimonies.situation = situation;
    if (conservation) res.patrimonies.conservation = conservation;
    if (origin) res.patrimonies.origin = origin;
    if (price) res.patrimonies.price = price;
    if (purchaseDate) res.patrimonies.purchaseDate = purchaseDate;
    if (docNumber) res.patrimonies.docNumber = docNumber;
    if (lifeCycle) res.patrimonies.lideCycle = lifeCycle;
    if (observation) res.patrimonies.observation = observation;
    if (amount) res.patrimonies.amount = amount;
    try {
      await res.patrimonies.save();
      return res.status(200).json({ message: 'Patrimonies editted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.patrimonies.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}