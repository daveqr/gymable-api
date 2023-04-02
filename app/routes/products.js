var express = require('express');
var router = express.Router();
const Product = require('../models/product');

// GET /products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// // POST /products
// router.post('/', (req, res) => {
//   res.json({
//     message: 'POST /products endpoint',
//   });
// });

// // PUT /products/:id
// router.put('/:id', (req, res) => {
//   res.json({
//     message: `PUT /products/${req.params.id} endpoint`,
//   });
// });

// // DELETE /products/:id
// router.delete('/:id', (req, res) => {
//   res.json({
//     message: `DELETE /products/${req.params.id} endpoint`,
//   });
// });

module.exports = router;
