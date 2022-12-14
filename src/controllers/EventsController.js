const { v4: uuid } = require('uuid');
const Events = require('../models/events');

module.exports = {
  async index(req, res) {
    try {
      const events = await Events.find();
      return res.status(200).json({ events })
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
    const events = new Events({
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
      await events.save();
      return res.status(201).json({ message: 'events added successfully!' })
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
    if (name) res.events.name = name;
    if (subName) res.events.subName = subName;
    if (startDate) res.events.startDate = startDate;
    if (endDate) res.events.endDate = endDate;
    if (notification) res.events.notification = notification;
    if (payment) res.events.payment = payment;
    if (value) res.events.value = value;
    if (numberOfVacancies) res.events.numberOfVacancies = numberOfVacancies;
    if (formOfPayment) res.events.formOfPayment = formOfPayment;
    if (schedule) res.events.schedule = schedule;
    if (aboutTheEvent) res.events.aboutTheEvent = aboutTheEvent;
    if (place) res.events.place = place;
    if (image) res.events.image = image;
    if (speakers) res.events.speakers = speakers;
    try {
      await res.events.save();
      return res.status(200).json({ message: 'events Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.events.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
