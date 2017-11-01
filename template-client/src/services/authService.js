import api from '@/services/api';

export default {
	register(email) {
		return api().post('register', email);
	},
	login(creds) {
		console.log(creds);
		return api().post('login', creds);
	}
}
