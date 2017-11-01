var mysql = require('mysql');
var q = require('q');
var config = require('../config/config.js');

var connection = mysql.createConnection({
	host     : config.db.host || 'localhost',
	user     : config.db.user || 'dbuser',
	password : config.db.pass || 's3kreee7',
	database : config.db.database || 'my_db'
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
	validate() {

	}
}
