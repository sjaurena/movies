var express = require('express');
var app     = express();

app.use(express.static(__dirname + '/app'));
app.use('/vendor', express.static(__dirname + '/bower_components'));
app.use('/media', express.static(__dirname + '/media'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/app/app.html');
});

// API
app.get('/api/movies', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(__dirname + '/api/movies.json');
});

app.listen(8080);

console.log('Running server...');