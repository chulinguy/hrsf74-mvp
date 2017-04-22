var express = require('express');
var app = express(); 
var bodyParser = require('body-parser');

var logger = require('./middleware/logger');

const PORT = process.env.PORT || 3000;
const IP = '127.0.0.1';

app.use(bodyParser.json());
app.use('/client', express.static(__dirname + '/client'));
app.use(logger);

app.use('/client', function (req, res, next) {
  console.log('Getting a request from client at Time:', Date.now());
  next();
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

//server 
app.listen(PORT, () => {
  console.log(`Tango for Dummies is listening on port ${PORT}`);
});


