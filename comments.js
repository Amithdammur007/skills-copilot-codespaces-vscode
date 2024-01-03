// create web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

// set up body parser for json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set up static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// set up routes
const routes = require('./routes.js');
app.use('/api', routes);

// start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));