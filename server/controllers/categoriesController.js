// controllers/categoriesController.js

const Category = require('../models/Category');

// @desc    Get all categories
exports.getCategories = async (req, res) => {
  const categories = await Category.find().sort({ name: 1 });
  res.json(categories);
};

// @desc    Create a new category
exports.createCategory = async (req, res) => {
  const { name } = req.body;

  const categoryExists = await Category.findOne({ name });
  if (categoryExists) {
    return res.status(400).json({ message: 'Category already exists' });
  }

  const category = await Category.create({ name });
  res.status(201).json(category);
};
