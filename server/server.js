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

// server setup complete!!!

// Global array to hold all of our data
let calculatorInput = [];

app.post('/equalto', (req, res) => {
    console.log(('in POST /equalto', req.body));
    totalValue(req.body)
    calculatorInput.push(req.body)
    console.log('calculatorInput', calculatorInput);

    res.sendStatus(201);
})

function totalValue(obj) {
    if (obj.signBtn==='add') {
        obj.sum = Number(obj.numberInputOne) + Number(obj.numberInputTwo);    
    }
    if (obj.signBtn==='subtract') {
        obj.sum = Number(obj.numberInputOne) - Number(obj.numberInputTwo);    
    }
    if (obj.signBtn==='multiply') {
        obj.sum = Number(obj.numberInputOne) * Number(obj.numberInputTwo);    
    }
    if (obj.signBtn==='division') {
        obj.sum = Number(obj.numberInputOne) / Number(obj.numberInputTwo);    
    }
    
}

app.get('/equalto', (req, res) => {
    console.log('in GET /equalto');
    res.send(calculatorInput);
})