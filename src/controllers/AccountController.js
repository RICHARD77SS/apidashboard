const { v4: uuid } = require('uuid');
const Account = require('../models/account');

module.exports = {
  async index(req, res) {
    try {
      const account = await Account.find();
      return res.status(200).json({ account })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      name,
      description
    } = req.body;
    if (!name) {
      return res.status(400).json({
        error: 'Missing name '
      })
    }
    const account = new Account({
      _id: uuid(),
      name,
      description
    })
    try {
      await account.save();
      return res.status(201).json({ message: 'account added successfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req, res) {
    const {
      name,
      description
    } = req.body;
    if (!name && !description) {
      return res.status(200).json({
        error: 'you must inform a new name or new description'
      })
    }
    if (name) res.account.name = name;
    if (description) res.account.description = description;
    try {
      await res.account.save();
      return res.status(200).json({ message: 'account Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.account.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
