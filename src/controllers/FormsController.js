const { v4: uuid } = require('uuid')
const Forms = require('../models/forms')

module.exports = {
  async index(req, res) {
    try {
      const forms = await Forms.find()
      return res.status(200).json({ forms })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      title,
      caption,
      status,
      notification,
      description,
      additionalFields,
      date
    } = req.body;
    if (!title) {
      return res.status(400).json({
        error: 'Missing title'
      })
    }
    const forms = new Forms({
      _id: uuid(),
      title,
      caption,
      status,
      notification,
      description,
      additionalFields,
      date
    })
    try {
      await forms.save()
      return res.status(201).json({ message: 'Form Added successfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },
  async update(req, res) {
    const {
      title,
      caption,
      status,
      notification,
      descriprion,
      additionalFields,
      date
    } = req.body;
    if (!title
      && !caption
      && !status
      && !notification
      && !descriprion
      && !additionalFields
      && !date) {
      return res.status(200).json({
        error: 'You must inform a new title or new info'
      })
    }
    if (title) res.forms.title = title;
    if (caption) res.forms.caption = caption;
    if (status) res.forms.status = status;
    if (notification) res.forms.notification = notification;
    if (descriprion) res.forms.descriprion = descriprion;
    if (additionalFields) res.forms.additionalFields = additionalFields;
    if (date) res.forms.date = date;
    try {
      await res.forms.save();
      return res.status(200).json({ message: 'form updated successfully!' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.forms.remove();
      return res.status(200).json({ message: 'deleted successfully!' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}