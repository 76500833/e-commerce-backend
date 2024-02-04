const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
  // find all categories
  try {
    const categories = await Categories.findAll({
      // include: [{ model: Product }],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

    // be sure to include its associated Products


router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const catagories = await Catagories.findAll();

  
    return res.json(catagories);
  } catch (err) {
    res.status(500).json(err);
  }
});
////////
// router.post('/', (req, res) => {}
//   try {

//   }
// });
//// 

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
