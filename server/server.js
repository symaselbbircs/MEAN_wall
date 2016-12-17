var express = require('express'),
    app = express(),
    bp = require('body-parser'),
    mongoose = require('mongoose');

var port = 8000;

app.use(bp.json())
app.use(express.static(__dirname + "./../client"));
app.use(express.static(__dirname + "./../bower_components"))

require('./config/db')

require('./config/routes')(app)

app.listen(port, function(){
  console.log(`Listening on ${port}`)
})
