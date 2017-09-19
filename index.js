const express = require('express');

// require will execute the passport.js file, invoking passport.use(). this is al that's required to establish the passport config, so there is no need to store the return value (undefined) to a constant; simply require without assigning.
require('./services/passport');


// invoke express object and save as app to initialize an express application
const app = express();

// use require to return function authRoutes from file authRoutes.js, and immediately invoke, passing the variable 'app'
require('./routes/authRoutes')(app);

// set PORT environment variable and default port that express/node will use for API service
const PORT = process.env.PORT || 5000

// pass the specified PORT to express/node
app.listen(PORT);