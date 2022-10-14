const { v4: uuid } = require('uuid');
const Category = require('../models/category');

module.exports = {
  async index(req, res) {
    try {
      const category = await Category.find();
      return res.status(200).json({ category })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async store(req, res) {
    const {
      categoryName,
      categoryDescription
    } = req.body;
    if (!categoryName || !categoryDescription) {
      return res.status(400).json({
        error: 'Missing categoryName or categoryDescription'
      })
    }
    const category = new Category({
      _id: uuid(),
      categoryName,
      categoryDescription
    })
    try {
      await category.save();
      return res.status(201).json({ message: 'Category added succesfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req, res) {
    const {
      categoryName,
      categoryDescription
    } = req.body;
    if (!categoryName && !categoryDescription) {
      return rex.status(200).json({
        error: 'you must inform a new categoryname or new categorydescription'
      })
    }
    if (categoryName) rex.category.categoryName = categoryName;
    if (categoryDescription) rex.category.categoryDescription = categoryDescription;
    try {
      await rex.category.save();
      return rex.status(200).json({ message: 'Category Updated successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  async delete(req, res) {
    try {
      await res.category.remove();
      return res.status(200).json({ message: 'deleted successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },
}
