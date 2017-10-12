//requires
var express = require('express');
var bodyParser = require('body-parser');
var path = require( 'path' );
var port = 5000;
require('dotenv').config();
var app = express();

var send = require('./routes/send');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/send', send);

app.listen(process.env.PORT || 5000, function(){
  console.log('listening on port', port);
});