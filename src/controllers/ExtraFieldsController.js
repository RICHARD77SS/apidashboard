const { v4: uuid } = require('uuid');
const ExtraFields = require('../models/extraFields')

module.exports = {
  //controler para rota get
  async index(req, res) {
    try {
      const extraFields = await ExtraFields.find();
      return res.status(200).json({extraFields})
    } catch (error) {
      res.status(500).json({error: error.message})
    }
  },
  //controler apra rota post
  async store(req, res) {
    const {
      inputName,
      inputType,
      inputOption
    } = req.body;
    if (!inputName || !inputType || !inputOption) {
      return res.status(400).json({
        error: 'Missing inputName or inputType or inputOption'})
    }
    const extraFields = new ExtraFields({
      _id: uuid(),
      inputName,
      inputType,
      inputOption
    });
    try {
      await extraFields.save();
      return res.status(201).json({message: 'Field added succesfully!'})
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  //update extraFields data
  async update(req, res) {
    const {
      inputName,
      inputType,
      inputOption
    } = req.body;
    if (!inputName 
      && !inputType
      && !inputOption
    ) {
      return res.status(200).json({
        error: 'you must inform a new inputName or inputType or inputOption'})
    }
    if (inputName) res.extraFields.inputName = inputName;
    if (inputType) res.extraFields.inputType = inputType;
    if (inputOption) res.extraFields.inputOption = inputOption;

    try {
      await res.extraFields.save();
      return res.status(200).json({message: 'Field Updated successfully'})
    } catch (error) {
      res.status(500).json({error: error.message})
    }
  },
  //delete
  async delete(req, res) {
    try {
      await res.extraFields.remove();
      return res.status(200).json({message: 'Deleted successfully'})
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
}