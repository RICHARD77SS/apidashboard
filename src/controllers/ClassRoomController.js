const { v4: uuid } = require('uuid');

const ClassRoom = require('../models/classroom')

module.exports = {
  async index(req, res) {
    try {
      const classRoom = await ClassRoom.find();
      return res.status(200).json({ classRoom })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      date,
      discipline,
      topic,
      remarks,
      notes,
      participants
    } = req.body;
    if (!discipline) {
      return res.status(400).json({
        error: 'missing name'
      })
    }
    const classRoom = new ClassRoom({
      _id: uuid(),
      date,
      discipline,
      topic,
      remarks,
      notes,
      participants
    })
    try {
      await classRoom.save();
      return res.status(201).json({ message: 'Class added successfully' })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },
  async update(req, res) {
    const {
      date,
      discipline,
      topic,
      remarks,
      notes,
      participants
    } = req.body;
    if (!date
      && !discipline
      && !topic
      && !remarks
      && !notes
      && !participants) {
      return res.stratus(200)({ error: 'You must inform a new values' })
    }
    if (topic) res.classRoom.topic = topic
    if (remarks) res.classRoom.remarks = remarks
    if (discipline) res.classRoom.discipline = discipline
    if (notes) res.classRoom.notes = notes
    if (date) res.classRoom.date = date
    if (participants) res.classRoom.participants = participants
    try {
      await res.classRoom.save();
      return res.status(200).json({ message: 'Class Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.classRoom.remove();
      return res.status(500).json({ message: 'Class Deleted' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}