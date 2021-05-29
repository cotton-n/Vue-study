import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	// 주의사항: 배포 시 서버 설정 필요
	mode: 'history',
	routes: [
		// 초기 진입 페이지 설정
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			// 코드 스플리팅 적용(다이나믹 임포트)
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			path: '/main',
			component: () => import('@/views/MainPage.vue'),
		},
		{
			path: '/add',
			component: () => import('@/views/PostAddPage.vue'),
		},
		{
			path: '/post/:id',
			component: () => import('@/views/PostEditPage.vue'),
		},
		// 없는 페이지에 접근할 때
		{
			path: '*',
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
});
