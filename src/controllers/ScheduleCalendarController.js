const { v4: uuid } = require('uuid');
const ScheduleCalendar = require('../models/scheduleCalendar');

module.exports = {
  async index(req, res) {
    try {
      const scheduleCalendar = await ScheduleCalendar.find();
      return res.status(200).json({ scheduleCalendar })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      name,
      visibility,
      startDate,
      startHour,
      endDate,
      endHour,
      repeat,
      category,
      place,
      anotations
    } = req.body;
    if (!name) {
      return res.status(400).json({
        error: 'Missing name '
      })
    }
    const scheduleCalendar = new ScheduleCalendar({
      _id: uuid(),
      name,
      visibility,
      startDate,
      startHour,
      endDate,
      endHour,
      repeat,
      category,
      place,
      anotations
    })
    try {
      await scheduleCalendar.save();
      return res.status(201).json({ message: 'scheduleCalendar added successfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req, res) {
    const {
      name,
      visibility,
      startDate,
      startHour,
      endDate,
      endHour,
      repeat,
      category,
      place,
      anotations
    } = req.body;
    if (!name
      && !visibility
      && !startDate
      && !startHour
      && !endDate
      && !endHour
      && !repeat
      && !category
      && !place
      && !anotations
    ) {
      return res.status(200).json({
        error: 'you must inform a new name or new visibility'
      })
    }
    if (name) res.scheduleCalendar.name = name;
    if (visibility) res.scheduleCalendar.visibility = visibility;
    if (startDate) res.scheduleCalendar.startDate = startDate;
    if (startHour) res.scheduleCalendar.startHour = startHour;
    if (endDate) res.scheduleCalendar.endDate = endDate;
    if (endHour) res.scheduleCalendar.endHour = endHour;
    if (repeat) res.scheduleCalendar.repeat = repeat;
    if (category) res.scheduleCalendar.category = category;
    if (place) res.scheduleCalendar.place = place;
    if (anotations) res.scheduleCalendar.anotations = anotations;
    try {
      await res.scheduleCalendar.save();
      return res.status(200).json({ message: 'scheduleCalendar Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.scheduleCalendar.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
