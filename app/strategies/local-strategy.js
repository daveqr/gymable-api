const LocalStrategy = require('passport-local').Strategy;

// Define a LocalStrategy for passport
const localStrategy = new LocalStrategy(
  function(username, password, done) {
    // In this example, we are hard-coding the user's credentials
    // In a real application, you would retrieve the user's credentials from a database or other source
    const user = { id: 1, username: 'myuser', password: 'mypassword' };
    if (username === user.username && password === user.password) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  }
);

module.exports = localStrategy;
