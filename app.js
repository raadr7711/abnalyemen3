var app = function () {
  var http = require('http');
  var express = require('express');
  var app = express();

  app.set('views', __dirname + '/');
  app.engine('html', require('ejs').renderFile);
  app.get('/views', function(req, res) {
    res.render('index.html');
  });

  return app;
}();

module.exports = app;
