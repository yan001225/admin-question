import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
			redirect: 'about',
			meta: { title: '首页' },
			children: [
				{
					path: 'about',
					name: 'about',
					component: () => import('../views/AboutView.vue'),
					meta: { title: '功能A功能A' },
					children: [
						{
							path: '/about',
							name: 'about',
							meta: { title: '新增二级商协' },
							component: () => import('../views/AboutView.vue'),
						},
						{
							path: '/other',
							name: 'other',
							meta: { title: '其他' },
							component: () => import('../views/OtherView.vue'),
						},
					],
				},
				{
					path: 'other2',
					name: 'other2',
					meta: { title: '功能B功能B' },
					component: () => import('../views/OtherView2.vue'),
					children: [
						{
							path: '/other3',
							name: 'other3',
							meta: { title: '其他3' },
							component: () => import('../views/Other3.vue'),
						},
					],
				},
			],
		},
	],
});

export default router;
