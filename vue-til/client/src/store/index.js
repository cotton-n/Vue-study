import Vue from 'vue';
import Vuex from 'vuex';
import {
	saveAuthToCookie,
	saveUserToCookie,
	getAuthFromCookie,
	getUserFromCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: getUserFromCookie() || '',
		token: getAuthFromCookie() || '',
	},
	getters: {
		isLogin(state) {
			return state.username !== '';
		},
	},
	mutations: {
		setUsername(state, username) {
			state.username = username;
		},
		clearUsername(state) {
			state.username = '';
		},
		setToken(state, token) {
			state.token = token;
		},
		clearToken(state) {
			state.token = '';
		},
	},
	actions: {
		async LOGIN({ commit }, userData) {
			const { data } = await loginUser(userData);
			commit('setUsername', data.user.username);
			commit('setToken', data.token);
			saveAuthToCookie(data.token);
			saveUserToCookie(data.user.username);
			// NOTE: 안해줘도 프로미스를 반환하지만 명시적으로 데이터를 반환
			return data;
		},
	},
});
