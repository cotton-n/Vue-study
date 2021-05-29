import Vue from 'vue';
import App from './App.vue';
import router from '@/routes';
import store from '@/store';
import { formatDate } from '@/utils/filters';

Vue.filter('formatDate', formatDate);
Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	router,
	store,
}).$mount('#app');
