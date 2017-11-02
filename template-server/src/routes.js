const authController = require('./controllers/auth');

module.exports = function(app) {
	app.get('/status', function(req, res) {
		res.send({
			message: 'live'
		})
	});

	app.post('/login', function(req, res) {
		authController.login(req, res);
	});

	app.post('/register', function(req, res) {
		authController.register(req, res);
	});

	app.post('/validate', function(req, res) {
		authController.validate(req, res);
	});
}
