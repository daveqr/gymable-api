var express = require('express');
var router = express.Router();
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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;