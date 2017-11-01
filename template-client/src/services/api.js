import axios from 'axios';

export default (function() {
	return axios.create({
		baseURL: 'http://159.89.252.72:8081/'
	})
})
