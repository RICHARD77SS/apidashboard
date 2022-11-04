const { v4: uuid } = require('uuid');
const Meetings = require('../models/meetings');

module.exports = {
  async index(req, res) {
    try {
      const meetings = await Meetings.find();
      return res.status(200).json({ meetings })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      name,
      group,
      date,
      subject,
      value,
      participants,
      visitors,
      notes
    } = req.body;
    if (!name) {
      return res.status(400).json({
        error: 'Missing name'
      })
    }
    const meetings = new Meetings({
      _id: uuid(),
      name,
      group,
      date,
      subject,
      value,
      participants,
      visitors,
      notes
    })
    try {
      await meetings.save();
      return res.status(201).json({ message: 'Meeting added successfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },
  async update(req, res) {
    const {
      name,
      group,
      date,
      subject,
      value,
      participants,
      visitors,
      notes
    } = req.body;
    if (!name
      && !group
      && !date
      && !subject
      && !value
      && !participants
      && !visitors
      && !notes) {
      return res.status(200).json({ error: 'you must inform a new name or new description' })
    }
    if (name) res.meetings.name = name
    if (group) res.meetings.group = group
    if (date) res.meetings.date = date
    if (subject) res.meetings.subject = subject
    if (value) res.meetings.value = value
    if (participants) res.meetings.participants = participants
    if (visitors) res.meetings.visitors = visitors
    if (notes) res.meetings.notes = notes
    try {
      await res.meetings.save();
      return res.status(200).json({ message: 'Mettings Updated successFully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.meetings.remove();
      return res.status(200).json({ message: 'Meetings deleted successfully!' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}