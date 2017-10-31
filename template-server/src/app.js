console.log('hello world');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', function(req, res) {
	res.send({
		message: 'live'
	})
});

app.get('/register', function(req, res) {
	res.send({
		message: `Hello ${req.query.email} - Registration Complete!`
	})
});

app.listen(process.env.PORT || 8081);
