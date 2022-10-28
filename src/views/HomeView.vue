<template>
	<div class="common-layout">
		<el-container>
			<el-aside class="aside" width="200px">
				<div class="logo">
					<div class="icon"></div>
					上海正业医药公司
				</div>
				<div class="menu">
					<el-menu
						:default-active="defaultMenu"
						:unique-opened="true"
						class="el-menu-vertical-demo"
						background-color="#2a3139"
						text-color="#bbb"
					>
						<el-sub-menu
							v-for="(item, index) in routerList.children"
							:key="index"
							:index="item.meta.title"
						>
							<template #title>
								<el-icon><Document /></el-icon>
								<span>{{ item.meta.title }}</span>
							</template>
							<el-menu-item-group title="">
								<router-link
									:to="'/' + menuItem.name"
									v-for="(menuItem, menuIdx) in item.children"
									:key="menuIdx"
								>
									<el-menu-item :index="menuItem.meta.title">
										{{ menuItem.meta.title }}
									</el-menu-item>
								</router-link>
							</el-menu-item-group>
						</el-sub-menu>
					</el-menu>
				</div>
			</el-aside>
			<el-container>
				<el-header class="header">
					<div class="header-item">
						<div class="header-item-icon">
							<el-icon :size="30">
								<HomeFilled />
							</el-icon>
						</div>
						<div class="header-item-name">首页</div>
					</div>
					<div class="header-item">
						<div class="header-item-icon">
							<el-icon :size="30">
								<UploadFilled />
							</el-icon>
						</div>
						<div class="header-item-name">主数据</div>
					</div>
					<div class="header-item">
						<div class="header-item-icon">
							<el-icon :size="30">
								<Promotion />
							</el-icon>
						</div>
						<div class="header-item-name">辖区管理</div>
					</div>
				</el-header>
				<el-main class="main">
					<Breadcrumb :list="breadcrumbList" :title="defaultMenu"></Breadcrumb>
					<div class="main-contianer">
						<router-view>
							<router-view></router-view>
						</router-view>
					</div>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script setup>
import { watchEffect, watch, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Breadcrumb from '../components/Breadcrumb.vue';

// 获取路由
const router = useRouter();
const routerList = router.currentRoute.value.matched[0];

// 默认展开的菜单
const defaultMenu = ref('');
// 面包屑列表
const breadcrumbList = ref([]);
watchEffect(() => {
	// console.log(router.currentRoute.value);
	defaultMenu.value = router.currentRoute.value.meta.title;

	if (router.currentRoute.value.matched) {
		breadcrumbList.value = router.currentRoute.value.matched.map((item) => {
			return {
				title: item.meta.title,
				path: item.path,
			};
		});
	}
	// console.log(defaultMenu.value);
});
</script>

<style lang="scss" scoped>
.aside {
	height: 100vh;
	background-color: #2a3139;
	.logo {
		height: 100px;
		color: #bbbbbb;
		font-size: 12px;
		display: flex;
		// align-items: center;
		flex-direction: column;
		justify-content: center;
		margin-left: 30px;
		.icon {
			width: 150px;
			height: 30px;
			background-color: pink;
			margin-bottom: 5px;
		}
	}
}
.header {
	height: 100px;
	background-image: linear-gradient(to right, #1f242a 10%, #2a3139 100%);
	color: #bbbbbb;
	display: flex;
	align-items: center;
	// justify-content: ;
	&-item {
		display: flex;
		align-items: center;
		margin-left: 50px;
		cursor: pointer;

		&-icon {
			margin-right: 15px;
			width: 50px;
			height: 50px;
			background-color: #52575d;
			border-radius: 8px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
}

.main {
	display: flex;
	flex-direction: column;
	background-color: #f5f5f5;
	padding: 0;
	&-contianer {
		padding: 0 25px;
		flex: 1;
	}
}
</style>
