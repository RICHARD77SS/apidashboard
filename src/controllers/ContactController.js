const { v4: uuid } = require('uuid');
const Contact = require('../models/contact');

module.exports = {
  async index(req, res) {
    try {
      const contact = await Contact.find();
      return res.status(200).json({ contact })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      name,
      email,
      category,
      type,
      phone1,
      phone2,
      anotations
    } = req.body;
    if (!name) {
      return res.status(400).json({
        error: 'Missing name '
      })
    }
    const contact = new Contact({
      _id: uuid(),
      name,
      email,
      category,
      type,
      phone1,
      phone2,
      anotations
    })
    try {
      await contact.save();
      return res.status(201).json({ message: 'contact added successfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req, res) {
    const {
      name,
      email,
      category,
      type,
      phone1,
      phone2,
      anotations
    } = req.body;
    if (!name && !email && !category && !type && phone1 && phone2 && anotations) {
      return res.status(200).json({
        error: 'you must inform a new name or new description'
      })
    }
    if (name) res.contact.name = name;
    if (email) res.contact.email = email;
    if (category) res.contact.category = category;
    if (type) res.contact.type = type;
    if (phone1) res.contact.phone1 = phone1;
    if (phone2) res.contact.phone2 = phone2;
    if (anotations) res.contact.anotations = anotations;
    try {
      await res.contact.save();
      return res.status(200).json({ message: 'contact Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.contact.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
