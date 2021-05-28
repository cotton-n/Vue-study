<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">id: </label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">pw: </label>
			<input id="password" type="text" v-model="password" />
		</div>
		<button v-bind:disabled="!isFormValid" type="submit">로그인</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { loginUser } from '@/api';
import { validateEmail } from '@/utils/validation';

export default {
	data() {
		return {
			// form
			username: '',
			password: '',
			// log
			logMessage: '',
		};
	},
	computed: {
		isFormValid() {
			return validateEmail(this.username) && this.password;
		},
	},
	methods: {
		async submitForm() {
			try {
				const userData = {
					username: this.username,
					password: this.password,
				};
				const { data } = await loginUser(userData);
				this.logMessage = `${data.user.username}님 환영합니다`;
			} catch (error) {
				this.logMessage = error.response.data;
				console.log(error.response);
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style scoped></style>
