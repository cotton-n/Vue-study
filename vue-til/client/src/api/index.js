import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
	return setInterceptors(instance);
}

const instance = createInstance();

function registerUser(data) {
	return instance.post('signup', data);
}

function loginUser(data) {
	return instance.post('login', data);
}

export { registerUser, loginUser };
