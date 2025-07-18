const express = require('express');
const router = express.Router();
const {
  getCategories,
  createCategory,
} = require('../controllers/categoriesController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getCategories).post(protect, createCategory);

module.exports = router;
