const express = require('express')
const bodyParser = require('body-parser');
const app = express();
// listen on port 5000
const port = 5000;
// start up our server
app.listen (port, () => {
    console.log('Server ready to listen on port', port)
});

// This must be added for GET & POST route
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// Global array to hold all of our data

let calculatorInput = [];
