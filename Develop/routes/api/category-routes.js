const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
const seedCategories = require('../../seeds/category-seeds');
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      // include: [
      //   {
      //     model: Product,
      //     as: 'products'
      //   }
      // ]
    });
    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }

  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
