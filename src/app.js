'use strict';
const bodyParser = require('body-parser');
const express  = require('express');
const calls = require('./calls');
const config = require('../config/config.js');
const app = express();
const q = require('q');
app.use(bodyParser.json());
calls.setupCalls(app);
app.listen(config.port, config.host, function(){
  console.log('Started listening at '+config.host+' with port '+config.port);
})
module.exports = app;