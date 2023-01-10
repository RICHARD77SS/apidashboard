const { v4: uuid } = require('uuid');

const PersonalCard = require('../models/personalCard');

module.exports = {
  async index(req, res) {
    try {
      const personalCard = await PersonalCard.find();
      return res.status(200).json({ personalCard })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      name,
      frontBgColor,
      frontBgImage,
      frontTitleColor,
      frontTextColor,
      frontSpanColor,
      frontPositions,
      backBgImage,
      backBgColor,
      backTitleColor,
      backTextColor,
      backSpanColor,
      backPositions
    } = req.body;
    if (!name) {
      return res.status(400).json({
        error: 'Missing name'
      })
    }
    const personalCard = new PersonalCard({
      _id: uuid(),
      name,
      frontBgColor,
      frontBgImage,
      frontTitleColor,
      frontTextColor,
      frontSpanColor,
      frontPositions,
      backBgImage,
      backBgColor,
      backTitleColor,
      backTextColor,
      backSpanColor,
      backPositions
    })
    try {
      await personalCard.save();
      return res.status(201).json({ message: 'PersonalCard added successfully!' })
    } catch (error) {
      res.status(400).json({
        error: error.message
      });
    }
  },
  async update(req, res) {
    const {
      name,
      frontBgColor,
      frontBgImage,
      frontTitleColor,
      frontTextColor,
      frontSpanColor,
      frontPositions,
      backBgImage,
      backBgColor,
      backTitleColor,
      backTextColor,
      backSpanColor,
      backPositions
    } = req.body;
    if (!name
      && !frontBgColor
      && !frontBgImage
      && !frontTitleColor
      && !frontTextColor
      && !frontSpanColor
      && !frontPositions
      && !backBgImage
      && !backBgColor
      && !backTitleColor
      && !backTextColor
      && !backSpanColor
      && !backPositions) {
      return res.status(200).json({
        error: 'you must inform a new name or new info'
      })
    }
    if (name) res.personalCard.name = name;
    if (frontBgColor) res.personalCard.frontBgColor = frontBgColor;
    if (frontBgImage) res.personalCard.frontBgImage = frontBgImage;
    if (frontTitleColor) res.personalCard.frontTitleColor = frontTitleColor;
    if (frontTextColor) res.personalCard.frontTextColor = frontTextColor;
    if (frontSpanColor) res.personalCard.frontSpanColor = frontSpanColor;
    if (frontPositions) res.personalCard.frontPositions = frontPositions;
    if (backBgImage) res.personalCard.backBgImage = backBgImage;
    if (backBgColor) res.personalCard.backBgColor = backBgColor;
    if (backTitleColor) res.personalCard.backTitleColor = backTitleColor;
    if (backTextColor) res.personalCard.lideCycle = backTextColor;
    if (backSpanColor) res.personalCard.backSpanColor = backSpanColor;
    if (backPositions) res.personalCard.backPositions = backPositions;
    try {
      await res.personalCard.save();
      return res.status(200).json({ message: 'PersonalCard editted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.personalCard.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}