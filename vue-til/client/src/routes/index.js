import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const router = new VueRouter({
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
			component: () => import('@/views/LoginPage.vue'),
			beforeEnter(to, from, next) {
				store.getters.isLogin ? next('/main') : next();
			},
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			path: '/main',
			component: () => import('@/views/MainPage.vue'),
			meta: { auth: true },
		},
		{
			path: '/add',
			component: () => import('@/views/PostAddPage.vue'),
			meta: { auth: true },
		},
		{
			path: '/post/:id',
			component: () => import('@/views/PostEditPage.vue'),
			meta: { auth: true },
		},
		// 없는 페이지에 접근할 때
		{
			path: '*',
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
});

router.beforeEach((to, from, next) => {
	if (to.meta.auth && !store.getters.isLogin) {
		next('/login');
		return;
	}
	next();
});

export default router;
