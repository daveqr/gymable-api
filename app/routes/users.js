var express = require('express');
var router = express.Router();
const User = require('../models/user');

const passport = require('passport');
const localStrategy = require('../strategies/local');

passport.use(localStrategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // In a real application, you would retrieve the user's data from a database or other source using the ID
  const user = { id: 1, username: 'myuser' };
  done(null, user);
});

/* GET users listing. */
router.get('/', passport.authenticate('local', { session: false }), async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// router.get('/', async (req, res) => {
//   try {
//     const users = await User.findAll();
//     res.json(users);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });

module.exports = router;
