const passport = require('passport');

module.exports = app => {
    // delegate to passport the request for permission to login via google
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // delegate to passport the authentication of users via the newly-provided 'code' parameter (will be sent as part of the request to this callback URL)
  app.get('/auth/google/callback', passport.authenticate('google'));

  // specify route handlers; set logic for each API endpoint by providing endpoint as a string, then a callback with desired logic to execute
  app.get('/', (req, res) => {
    res.send({
      hiya: 'world'
    });
  });
};

