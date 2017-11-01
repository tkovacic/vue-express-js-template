console.log('hello world');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

app.get('/status', function(req, res) {
	res.send({
		message: 'live'
	})
});

app.post('/login', function(req, res) {
	res.send({
		message: `Authenticated ${req.body.usrEmail}, ${req.body.usrPass} - Login Complete!`
	})
});

app.post('/register', function(req, res) {
	res.send({
		message: `Hello ${req.body.usrEmail} - Registration Complete!`
	})
});

app.listen(process.env.PORT || 8081);
