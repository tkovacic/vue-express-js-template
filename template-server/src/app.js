const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const socketIO = require('socket.io');
const config = require('../config/config.js');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

require('./routes')(app);

var server = require('http').Server(app).listen(config.port);
console.log('Hello World! I am alive on ' + config.host + ':' + config.port);

var SOCKET_LIST = {};
var io = socketIO(server);

io.on('connection', function (socket) {
	socket.id = Math.random();
	SOCKET_LIST[socket.id] = socket;
	socket.on('disconnect', function() {
		delete SOCKET_LIST[socket.id];
		//Player.onDisconnect(socket);
	});
});

setInterval(function() {
	var pack = {
		msg: 'hello world! Still Alive!'
	}

	for(var i in SOCKET_LIST) {
		var socket = SOCKET_LIST[i];
		socket.emit('update', pack);
	}
},10000); //1000/25
