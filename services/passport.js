// import the popular oauth library passport.js
const passport = require('passport');

// import a passport strategy that allows passport to interface with google oauth
const GoogleStrategy = require('passport-google-oauth20');

// import secret keys module, as defined in config/, to provide to passport
const keys = require('../config/keys');

// specify a valid strategy to passport, providing a client ID, secret key, and callback url, to which google will redirect users after oauth process
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(`access token ${accessToken}`);
      console.log(`refresh token ${refreshToken}`);
      console.log(`profile: ${JSON.stringify(profile)}`);
    }
  )
);