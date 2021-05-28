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
		<div>
			<label for="nickname">nickname: </label>
			<input id="nickname" type="text" v-model="nickname" />
		</div>
		<button v-bind:disabled="!isFormValid" type="submit">회원 가입</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { registerUser } from '@/api';
import { validateEmail } from '@/utils/validation';

export default {
	data() {
		return {
			// form
			username: '',
			password: '',
			nickname: '',
			// log
			logMessage: '',
		};
	},
	computed: {
		isFormValid() {
			return validateEmail(this.username) && this.password && this.nickname;
		},
	},
	methods: {
		async submitForm() {
			try {
				const userData = {
					username: this.username,
					password: this.password,
					nickname: this.nickname,
				};
				const { data } = await registerUser(userData);
				this.logMessage = `${data.username}님이 가입되었습니다`;
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
			this.nickname = '';
		},
	},
};
</script>

<style scoped></style>
