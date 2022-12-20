const { v4: uuid } = require('uuid');
const EventsRegister = require('../models/eventsRegister');

module.exports = {
  async index(req, res) {
    try {
      const eventsRegister = await EventsRegister.find();
      return res.status(200).json({ eventsRegister })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      name,
      evento,
      phone,
      email,
      address,
      number,
      district,
      zipCode,
      country,
      state,
      city,
      payment,
      date,
    } = req.body;
    if (!name) {
      return res.status(400).json({
        error: 'Missing name '
      })
    }
    const eventsRegister = new EventsRegister({
      _id: uuid(),
      name,
      evento,
      phone,
      email,
      address,
      number,
      district,
      zipCode,
      country,
      state,
      city,
      payment,
      date
    })
    try {
      await eventsRegister.save();
      return res.status(201).json({ message: 'eventsRegister added successfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req, res) {
    const {
      name,
      evento,
      phone,
      email,
      address,
      number,
      district,
      zipCode,
      country,
      state,
      city,
      payment,
      date
    } = req.body;
    if (!name
      && !evento
      && !phone
      && !email
      && !address
      && !number
      && !district
      && !zipCode
      && !country
      && !state
      && !city
      && !payment
      && !date
    ) {
      return res.status(200).json({
        error: 'you must inform a new name or new event'
      })
    }
    if (name) res.eventsRegister.name = name;
    if (evento) res.eventsRegister.event = evento;
    if (phone) res.eventsRegister.phone = phone;
    if (email) res.eventsRegister.email = email;
    if (address) res.eventsRegister.address = address;
    if (number) res.eventsRegister.number = number;
    if (district) res.eventsRegister.district = district;
    if (zipCode) res.eventsRegister.zipCode = zipCode;
    if (country) res.eventsRegister.country = country;
    if (state) res.eventsRegister.state = state;
    if (city) res.eventsRegister.city = city;
    if (payment) res.eventsRegister.payment = payment;
    if (date) res.eventsRegister.date = date;
    try {
      await res.eventsRegister.save();
      return res.status(200).json({ message: 'eventsRegister Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.eventsRegister.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
