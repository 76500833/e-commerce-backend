const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


  // find all tags
  router.get('/', async (req, res) => {
    try {
      const tags = await Tag.findAll({
        include: [{
          model: Product,
          as: 'products'
        }]
      });
      res.json(tags);
    } catch(err) {
      res.json(err);
    }
    // be sure to include its associated Product data
  });

  // find a single tag by its `id`
  // be sure to include its associated Product data
  router.get('/:id', async (req, res) => {
    try {
      const tag = await Tag.findByPk(req.params.id, {
        include: [{
          model: Product,
          as: 'products'
        }]
      });
      if (!tag) {
        res.status(404).json({ message: 'Tag not found' });
        return;
      }
      res.json(tag);
    } catch(err) {
      res.json(err);
    }
  });

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body) 
      res.json(newTag)
    
   
  } catch (err) {
    res.json({message: 'error'})
  }
});


router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!tag[0]) { // update returns an array, where the first element is the number of affected rows
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.json({ message: 'Category updated successfully!' });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!deletedTag) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.json({ message: 'Tag deleted successfully!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
