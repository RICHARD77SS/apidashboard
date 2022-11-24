const { v4: uuid } = require('uuid');

const Claass = require('../models/claass')

module.exports = {
  async index(req, res) {
    try {
      const claass = await Claass.find();
      return res.status(200).json({ claass })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      name,
      school,
      time,
      status,
      description,
      date,
      participants
    } = req.body;
    if (!name) {
      return res.status(400).json({
        error: 'missing name'
      })
    }
    const claass = new Claass({
      _id: uuid(),
      name,
      school,
      time,
      status,
      description,
      date,
      participants
    })
    try {
      await claass.save();
      return res.status(201).json({ message: 'Class added successfully' })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },
  async update(req, res) {
    const {
      name,
      school,
      time,
      status,
      description,
      date,
      participants
    } = req.body;
    if (!name
      && !school
      && !time
      && !status
      && !description
      && !date
      && !participants) {
      return res.stratus(200)({ error: 'You must inform a new values' })
    }
    if (name) res.claass.name = name
    if (school) res.claass.school = school
    if (time) res.claass.time = time
    if (status) res.claass.status = status
    if (description) res.claass.description = description
    if (date) res.claass.date = date
    if (participants) res.claass.participants = participants
    try {
      await res.claass.save();
      return res.status(200).json({ mewsage: 'Class Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.claass.remove();
      return res.status(500).json({ message: 'Class Deleted' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}