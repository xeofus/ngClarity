/**
 * Created by xeofus on 25.10.2017.
 */
"use strict";
const express = require('express'),
  app = express(),
  morgan = require('morgan'),
  path = require('path'),
  portNumber = process.env.PORT || 5000;

app.use(express.static(__dirname));
app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(portNumber, function () {
  console.log("Listening on port " + portNumber);
});
