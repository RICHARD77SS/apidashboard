const { v4: uuid } = require('uuid');
const Orientation = require('../models/orientation');

module.exports = {
  async index(req, res) {
    try {
      const orientation = await Orientation.find();
      return res.status(200).json({ orientation })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      className,
      status,
      lideres,
      anotations,
      people,
      meetings
    } = req.body;
    if (!className) {
      return res.status(400).json({
        error: 'Missing className'
      })
    }
    const orientation = new Orientation({
      _id: uuid(),
      className,
      status,
      lideres,
      anotations,
      people,
      meetings
    })
    try {
      await orientation.save();
      return res.status(201).json({ message: 'Orientation added successfully' })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },
  async update(req, res) {
    const {
      className,
      status,
      lideres,
      anotations,
      people,
      meetings
    } = req.body;
    if (!className && !status && !lideres && !anotations && !people && !meetings) {
      return res.status(200).json({ message: 'You must inform className or other info!' })
    }
    if (className) res.orientation.className = className;
    if (status) res.orientation.status = status;
    if (lideres) res.orientation.lideres = lideres;
    if (anotations) res.orientation.anotations = anotations;
    if (people) res.orientation.people = people;
    if (meetings) res.orientation.meetings = meetings;

    try {
      await res.orientation.save()
      return res.status(200).json({ message: 'Orientation Edited successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.orientation.remove();
      return res.status(200).json({ message: 'Orientation deleted successfully!' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

}