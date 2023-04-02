var express = require('express');
var router = express.Router();
const User = require('../models/user');

/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
