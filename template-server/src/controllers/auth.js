const authDB = require('../../data/authDB.js');

module.exports = {
	register(req, res) {
		const response = authDB.register(req.body.usrEmail).then(function() {
			if(response == true) {
				res.send(`Verification Email Sent to ${req.body.usrEmail} - Registration Complete!`);
			} else {
				res.send(`${req.body.usrEmail} Already Exists - Registration Failed!`);
			}
		});
	},
	login(req, res) {
		const response = authDB.login(req.body.usrEmail, req.body.usrPass).then(function() {
			if(response == true) {
				res.send(`Authenticated ${req.body.usrEmail}, ${req.body.usrPass} - Login Complete!`);
			} else {
				res.send(`Failed to Authenticate ${req.body.usrEmail}, ${req.body.usrPass}!`);
			}
		});
	},
	activate(req, res) {
		const response = authDB.activate(req.body.usrCode).then(function() {
			if(response == true) {
				res.send(`Code: ${req.body.usrCode} Validated!`);
			} else {
				res.send(`Code: ${req.body.usrCode} Failed to Validate!`);
			}
		});
	}
}
