<template>
	<div class="breadcirumb">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item
				v-for="(item, index) in list"
				:key="index"
				:to="item.path"
			>
				{{ item.title }}
			</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="title">
			{{ title }}
		</div>
	</div>
</template>
<script setup>
defineProps({
	list: {
		type: Array,
	},
	title: {
		type: String,
	},
});
</script>
<style lang="scss" scoped>
.breadcirumb {
	width: 100%;
	height: 85px;
	background-color: #fff;
	padding: 20px 30px;
}
.title {
	margin-top: 10px;
	font-weight: 600;
}
</style>
