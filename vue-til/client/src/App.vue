<template>
	<div class="app">
		<AppHeader></AppHeader>
		<div class="app-contents">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
	components: {
		AppHeader,
	},
};
</script>

<style>
@import './assets/css/reset.css';
@import './assets/css/common.css';
</style>
