import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// axios 초기화
function createInstance() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
	return setInterceptors(instance);
}

const instance = createInstance();

// 회원가입 API
function registerUser(data) {
	return instance.post('signup', data);
}

// 로그인 API
function loginUser(data) {
	return instance.post('login', data);
}

// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
	return instance.get('posts');
}

// 학습 노트 데이터를 생성하는 API
function createPost(data) {
	return instance.post('posts', data);
}

export { registerUser, loginUser, fetchPosts, createPost };
