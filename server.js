/**
 * Created by xeofus on 25.10.2017.
 */
"use strict";
// const express = require('express'),  app = express(),  path = require('path');
//
// app.use(express.static(__dirname));
//
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'dist/'));
// });
//
// app.listen(process.env.PORT || 5000);

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
// app
var app = express();
// cors
// views. -- VERY IMPORTANT
app.set('views', path.join(__dirname, 'src'));
// engine
app.set('view enginer', 'ejs');
app.engine('html', require('ejs').renderFile);
// angular  dist -- VERY IMPORTANT
app.use(express.static(__dirname + '/dist'));
// body bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// routes
app.use('/', index);
// port.
var server = app.listen(process.env.PORT || 5000);
