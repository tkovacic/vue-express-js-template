var mysql = require('mysql');
var q = require('q');
var config = require('../config/config.js');

var connection = mysql.createConnection({
	host     : config.db.host,
	user     : config.db.user,
	password : config.db.pass,
	database : config.db.database
});

module.exports = {
	login(usrEmail, usrPass) {
		var deferred = q.defer(); // Use Q
		var authenticated = false;
		//deferred.reject(err);
		//connection.connect();
		deferred.resolve(authenticated);
		//connection.end();
		return deferred.promise;
	},
	register() {
		var deferred = q.defer(); // Use Q
		var uniqueEmail = false;
		//deferred.reject(err);
		//connection.connect();
		deferred.resolve(uniqueEmail);
		//connection.end();
		return deferred.promise;
	},
	activate() {
		var deferred = q.defer(); // Use Q
		var codeMatch = false;
		//deferred.reject(err);
		//connection.connect();
		deferred.resolve(codeMatch);
		//connection.end();
		return deferred.promise;
	}
}
