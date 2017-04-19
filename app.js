var express = require('express');
var app = express();
var mongoose = require('mongoose');

//DB setup
// mongoose.connect("mongodb://mongo:27017");

app.use(express.static('public'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
