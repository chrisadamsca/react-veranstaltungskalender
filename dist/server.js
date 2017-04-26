var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');

//DB setup
// mongoose.connect("mongodb://mongo:27017");

app.use('/static', express.static(path.join(__dirname, 'static')))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/static/index.html');
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});