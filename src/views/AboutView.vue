<template>
	<div class="about">
		<el-divider border-style="dashed">
			<div class="divider">
				<div class="divider-num">1</div>
				<div class="divider-title">协议主题</div>
			</div>
		</el-divider>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
// console.log(route);
</script>

<style lang="scss">
.el-divider__text {
	background-color: #f5f5f5;
}
.el-divider--horizontal {
	border-top: 3px var(--el-border-color) var(--el-border-style) !important;
}
.divider {
	display: flex;
	align-items: center;
	&-num {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background-color: #4e8dff;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 16px;
		font-weight: 600;
	}
	&-title {
		font-size: 20px;
		font-weight: 600;
		margin-left: 10px;
	}
}
</style>
