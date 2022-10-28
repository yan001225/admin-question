<template>
	<div class="about">
		<divider num="1" title="协议主体"></divider>
		<el-form
			:rules="rules"
			:inline="true"
			:model="formInline"
			class="demo-form-inline"
		>
			<el-form-item label="协议客户" prop="user">
				<el-input v-model="formInline.user" placeholder="Approved by" />
			</el-form-item>
			<el-form-item label="Activity zone">
				<el-select v-model="formInline.region" placeholder="Activity zone">
					<el-option label="Zone one" value="shanghai" />
					<el-option label="Zone two" value="beijing" />
				</el-select>
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup>
import { reactive } from 'vue';
import Divider from '../components/Divider.vue';

const formInline = reactive({
	user: '',
	region: '',
});

const rules = reactive({
	user: [
		{ required: true, message: 'Please input Activity name', trigger: 'blur' },
	],
});
</script>

<style lang="scss" scoped>
.demo-form-inline {
	display: flex;
	align-items: center;
	background-color: #fff;
	padding: 30px;
	// justify-content: space-between;
}
.el-form-item {
	width: 50%;
}
.el-input {
	width: 350px;
}
</style>
