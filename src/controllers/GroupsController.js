const { v4: uuid } = require('uuid');
const Groups = require('../models/groups')

module.exports = {
  async index(req, res) {
    try {
      const groups = await Groups.find();
      return res.status(200).json({ groups })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },

  async store(req, res) {
    const {
      name,
      image,
      bg,
      creationDate,
      weekDay,
      sex,
      time,
      category,
      originGroup,
      lider1,
      lider2,
      lider3,
      lider4,
      address,
      district,
      number,
      country,
      state,
      city,
      anotations,
      participants
    } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Missing' })
    }
    const groups = new Groups({
      _id: uuid(),
      name,
      image,
      bg,
      creationDate,
      weekDay,
      sex,
      time,
      category,
      originGroup,
      lider1,
      lider2,
      lider3,
      lider4,
      address,
      district,
      number,
      country,
      state,
      city,
      anotations,
      participants
    })
    try {
      await groups.save();
      return res.status(201).json({ message: 'Groups added successfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },

  async update(req, res) {
    const {
      name,
      image,
      bg,
      creationDate,
      weekDay,
      sex,
      time,
      category,
      originGroup,
      lider1,
      lider2,
      lider3,
      lider4,
      address,
      district,
      number,
      country,
      state,
      city,
      anotations,
      participants
    } = req.body;
    if (!name
      && !image
      && !bg
      && !creationDate
      && !weekDay
      && !sex
      && !time
      && !category
      && !originGroup
      && !lider1
      && !lider2
      && !lider3
      && !lider4
      && !address
      && !district
      && !number
      && !country
      && !state
      && !city
      && !anotations
      && !participants
    ) {
      return res.status(200).json({ error: 'You must inform a new name' })
    }
    if (name) res.groups.name = name;
    if (image) res.groups.image = image
    if (bg) res.groups.bg = bg
    if (creationDate) res.groups.creationDate = creationDate
    if (weekDay) res.groups.weekDay = weekDay
    if (sex) res.groups.sex = sex
    if (time) res.groups.time = time
    if (category) res.groups.category = category
    if (originGroup) res.groups.originGroup = originGroup
    if (lider1) res.groups.lider1 = lider1
    if (lider2) res.groups.lider2 = lider2
    if (lider3) res.groups.lider3 = lider3
    if (lider4) res.groups.lider4 = lider4
    if (address) res.groups.address = address
    if (district) res.groups.district = district
    if (number) res.groups.number = number
    if (country) res.groups.country = country
    if (state) res.groups.state = state
    if (city) res.groups.city = city
    if (anotations) res.groups.anotations = anotations
    if (participants) res.groups.participants = participants
    
    try {
      await res.groups.save();
      return res.status(200).json({ message: 'updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.groups.remove();
      return res.status(200).json({ message: 'Deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}