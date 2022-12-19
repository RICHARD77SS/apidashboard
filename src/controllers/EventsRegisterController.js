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
      subName,
      startDate,
      endDate,
      notification,
      payment,
      value,
      numberOfVacancies,
      formOfPayment,
      schedule,
      aboutTheEvent,
      place,
      image,
      speakers

    } = req.body;
    if (!name) {
      return res.status(400).json({
        error: 'Missing name '
      })
    }
    const eventsRegister = new EventsRegister({
      _id: uuid(),
      name,
      subName,
      startDate,
      endDate,
      notification,
      payment,
      value,
      numberOfVacancies,
      formOfPayment,
      schedule,
      aboutTheEvent,
      place,
      image,
      speakers
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
      subName,
      startDate,
      endDate,
      notification,
      payment,
      value,
      numberOfVacancies,
      formOfPayment,
      schedule,
      aboutTheEvent,
      place,
      image,
      speakers
    } = req.body;
    if (!name && !subName) {
      return res.status(200).json({
        error: 'you must inform a new name or new subName'
      })
    }
    if (name) res.eventsRegister.name = name;
    if (subName) res.eventsRegister.subName = subName;
    if (startDate) res.eventsRegister.startDate = startDate;
    if (endDate) res.eventsRegister.endDate = endDate;
    if (notification) res.eventsRegister.notification = notification;
    if (payment) res.eventsRegister.payment = payment;
    if (value) res.eventsRegister.value = value;
    if (numberOfVacancies) res.eventsRegister.numberOfVacancies = numberOfVacancies;
    if (formOfPayment) res.eventsRegister.formOfPayment = formOfPayment;
    if (schedule) res.eventsRegister.schedule = schedule;
    if (aboutTheEvent) res.eventsRegister.aboutTheEvent = aboutTheEvent;
    if (place) res.eventsRegister.place = place;
    if (image) res.eventsRegister.image = image;
    if (speakers) res.eventsRegister.speakers = speakers;
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
