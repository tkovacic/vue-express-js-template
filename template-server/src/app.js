const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('../config/config.js')

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

require('./routes')(app);

app.listen(config.port);
console.log('Hello World! I am alive on ' + config.host + ':' + config.port);
