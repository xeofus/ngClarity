/**
 * Created by xeofus on 25.10.2017.
 */
"use strict";
const express = require('express'),
  app = express(),
  path = require('path')

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/'));
});

app.listen(process.env.PORT || 5000);
