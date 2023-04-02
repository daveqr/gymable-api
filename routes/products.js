var express = require('express');
var router = express.Router();

// GET /products
router.get('/', (req, res) => {
  res.json({
    message: 'GET /products endpoint',
  });
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
