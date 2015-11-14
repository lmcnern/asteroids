'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.set('port', (process.env.PORT || 8000));
app.use(express.static(__dirname + '/'));

app.get('/*', function(request, response) {
  response.status(404).sendFile(__dirname +'/404.html');
});

app.listen(port, function() {
  console.log('server starting at ' + port);
});
