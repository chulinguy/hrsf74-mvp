var express = require('express');
var app = express(); 
var bodyParser = require('body-parser');

var logger = require('./middleware/logger');
var newMoveHandler= require('./middleware/newMoveHandler');

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

app.get('/flowchart', (req, res) => {
  res.sendFile(__dirname + '/client/flowchart.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/client/about.html');
});

app.get('/leaders-starter', (req, res) => {
  res.sendFile(__dirname + '/client/leaders_starter.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/client/contact.html');
});

app.get('/followers-starter', (req, res) => {
  res.sendFile(__dirname + '/client/followers_starter.html');
});

// app.post('/newMove', newMoveHandler);

//server 
app.listen(PORT, () => {
  console.log(`Tango for Dummies is listening on port ${PORT}`);
});


