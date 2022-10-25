const { v4: uuid } = require('uuid');

const Financial = require('../models/financial');

module.exports = {
  async index(req, res) {
    try {
      const financial = await Financial.find();
      return res.status(200).json({ financial })

    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      date,
      description,
      value,
      paidOut,
      receivedFrom,
      category,
      account,
      costCenter,
      typeOfPayment,
      documentNumber,
      competence,
      notes,
      file,
      revenuesExpenses
    } = req.body;
    if ( !value) {
      return res.status(400).json({ error: 'missing Date, value' })
    }
    const financial = new Financial({
      _id: uuid(),
      date,
      description,
      value,
      paidOut,
      receivedFrom,
      category,
      account,
      costCenter,
      typeOfPayment,
      documentNumber,
      competence,
      notes,
      file,
      revenuesExpenses
    })
    try {
      await financial.save();
      return res.status(201).json({ message: 'Financial added successfully' })
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req, res) {
    const {
      date,
      description,
      value,
      paidOut,
      receivedFrom,
      category,
      account,
      costCenter,
      typeOfPayment,
      documentNumber,
      competence,
      notes,
      file,
      revenuesExpenses
    } = req.body;
    if (!date
      && !description
      && !value
      && !paidOut
      && !receivedFrom
      && !category
      && !account
      && !costCenter
      && !typeOfPayment
      && !documentNumber
      && !competence
      && !notes
      && !file
      && !revenuesExpenses
    ) {
      return res.status(200).json({ message: 'Financial updated successfully' })
    }
    if (date) res.financial.date = date;
    if (description) res.financial.description = description;
    if (value) res.financial.value = value;
    if (paidOut) res.financial.paidOut = paidOut;
    if (receivedFrom) res.financial.receivedFrom = receivedFrom;
    if (category) res.financial.category = category;
    if (account) res.financial.account = account;
    if (costCenter) res.financial.costCenter = costCenter;
    if (typeOfPayment) res.financial.typeOfPayment = typeOfPayment;
    if (documentNumber) res.financial.documentNumber = documentNumber;
    if (competence) res.financial.competence = competence;
    if (notes) res.financial.notes = notes;
    if (file) res.financial.file = file;
    if (revenuesExpenses) res.financial.revenuesExpenses = revenuesExpenses;
    try {
      await res.financial.save();
      return res.status(200).json({message: 'financial updated successfully'})
    } catch (error) {
      res.status(500).json({error: error.message})
    }
  },

  async delete(req,res) {
    try {
      await res.financial.remove();
      return res.status(200).json({message: 'Deleted successfully'})
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  },
}