const { v4: uuid } = require('uuid');
const Subjects = require('../models/subjects');

module.exports = {
  async index(req, res) {
    try {
      const subjects = await Subjects.find();
      return res.status(200).json({ subjects })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      name,
      teacher,
      classIndex
    } = req.body;
    if (!name) {
      return res.status(400).json({
        error: 'Missing name'
      })
    }
    const subjects = new Subjects({
      _id: uuid(),
      name,
      teacher,
      classIndex
    })
    try {
      await subjects.save();
      return res.status(201).json({ message: 'subject added successfully' })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },
  async update(req, res) {
    const {
      name,
      teacher,
      classIndex
    } = req.body;
    if (!name
      && !teacher
      && !classIndex) {
      return res.status(200).json({ error: 'you must inform a new name or other info!' })
    }
    if (name) res.subjects.name = name;
    if (teacher) res.subjects.reacher = teacher;
    if (classIndex) res.subjects.classIndex = classIndex;
    try {
      await res.subjects.save()
      return res.status(200).json({ message: 'Subject updates successfully!' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.subjects.remove();
      return res.status(200).json({ message: 'Subject deleted successfully!' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}