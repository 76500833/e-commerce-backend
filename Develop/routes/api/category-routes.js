const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
const seedCategories = require('../../seeds/category-seeds');
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [
        {
          // be sure to include its associated Products
          model: Product, // replace with your Product model
          as: 'products' // optional: alias for the association
        }
      ]
    });
    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!category) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body) 
      res.json(newCategory)
    
   
  } catch (err) {
    res.json({message: 'error'})
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!category[0]) { // update returns an array, where the first element is the number of affected rows
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.json({ message: 'Category updated successfully!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!deletedCategory) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.json({ message: 'Category deleted successfully!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
