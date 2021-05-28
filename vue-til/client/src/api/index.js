import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(data) {
	return instance.post('signup', data);
}

function loginUser(data) {
	return instance.post('login', data);
}

export { registerUser, loginUser };
