<template>
	<div class="about">
		<divider num="1" title="协议主体"></divider>
		<el-form
			:rules="rules"
			:inline="true"
			:model="formInline"
			label-position="right"
	
    		label-width="100px"
			class="demo-form-inline"
		>
			<el-form-item label="协议客户：" prop="user">
				<!-- <el-input v-model="formInline.user" placeholder="Approved by" /> -->
				<el-button style="width:100px;">选择客户</el-button>
				<div class="ml-15">上海正也医药有限公司</div>
			</el-form-item>
			<el-form-item label="协议状态：">
				<el-select v-model="formInline.region" placeholder="">
					<el-option label="正常" value="shanghai" />
					<el-option label="不正常" value="beijing" />
				</el-select>
			</el-form-item>
			<el-form-item label="购进指标：" >
				<el-select style="width:100px;" v-model="formInline.region" placeholder="">
					<el-option label="正常" value="shanghai" />
					<el-option label="不正常" value="beijing" />
				</el-select>
				<el-input width="350" class="ml-15" placeholder="输入金额/数量" disabled ></el-input>
			</el-form-item>
			<el-form-item label="纯销指标：" >
				<el-select style="width:88px;" v-model="formInline.region" placeholder="">
					<el-option label="正常" value="shanghai" />
					<el-option label="不正常" value="beijing" />
				</el-select>
				<el-input width="350" class="ml-15" placeholder="输入金额/数量" disabled ></el-input>
			</el-form-item>
			<el-form-item label="销售渠道：" >
				<el-button style="width:100px;">选择区域</el-button>
				<!-- <el-tag class="ml-15" style="height: 30px;" closable type="success">全国</el-tag> -->
  				<el-tag class="ml-15" style="height: 30px; width: 80px;" closable tsype="info">全国</el-tag>
			</el-form-item>
			<el-form-item label="签订时间：" >
				<el-input style="width:455px ;"  placeholder="输入金额/数量" disabled ></el-input>
			</el-form-item>
			<el-form-item label="购进指标：" >
				<el-select style="width:100px;" v-model="formInline.type" placeholder="">
					<el-option label="指定渠道" value="shanghai" />
					<el-option label="不正常" value="beijing" />
				</el-select>
				<el-button style="width:100px;" class="ml-15">请选择渠道</el-button>
			</el-form-item>
			<div style="padding-left: 100px; width: 100%;">
				<el-table :data="tableData" :scrollbar-always-on="false" style="width: 100%; ">
					<el-table-column prop="date" label="Date" width="180" />
					<el-table-column prop="name" label="Name" width="180" />
					<el-table-column prop="address" label="Address" />
				</el-table>
			</div>
		</el-form>
	</div>
</template>

<script setup>
import { reactive } from 'vue';
import Divider from '../components/Divider.vue';

const formInline = reactive({
	user: '',
	region: '正常',
	name:'',
	title:'',
	type:'指定渠道'
});

const rules = reactive({
	user: [
		{ required: true, message: 'Please input Activity name', trigger: 'blur' },
	],
});

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<style lang="scss" scoped>
.demo-form-inline {
	display: flex;
	align-items: center;
	background-color: #fff;
	padding: 30px;
	flex-wrap: wrap;
	// justify-content: space-between;
}
.el-form-item {
	// wiwdth: 40%;
	width: 40%;
}
.el-form-item:nth-child(2n - 1) {
	width: 55%;
}
.el-input {
	width: 350px;
}
.ml-15 {
	margin-left: 15px;
}
</style>
