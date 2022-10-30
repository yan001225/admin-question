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
        <el-button style="width: 100px">选择客户</el-button>
        <div class="ml-15">上海正也医药有限公司</div>
      </el-form-item>
      <el-form-item label="协议状态：">
        <el-select v-model="formInline.region" placeholder="">
          <el-option label="正常" value="shanghai" />
          <el-option label="不正常" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="购进指标：">
        <el-select
          style="width: 100px"
          v-model="formInline.region"
          placeholder=""
        >
          <el-option label="正常" value="shanghai" />
          <el-option label="不正常" value="beijing" />
        </el-select>
        <el-input
          width="350"
          class="ml-15"
          placeholder="输入金额/数量"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item label="纯销指标：">
        <el-select
          style="width: 88px"
          v-model="formInline.region"
          placeholder=""
        >
          <el-option label="正常" value="shanghai" />
          <el-option label="不正常" value="beijing" />
        </el-select>
        <el-input
          width="350"
          class="ml-15"
          placeholder="输入金额/数量"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item label="销售渠道：">
        <el-button style="width: 100px">选择区域</el-button>
        <!-- <el-tag class="ml-15" style="height: 30px;" closable type="success">全国</el-tag> -->
        <el-tag
          class="ml-15"
          style="height: 30px; width: 80px"
          closable
          tsype="info"
          >全国</el-tag
        >
      </el-form-item>
      <el-form-item label="签订时间：">
        <el-input
          style="width: 455px"
          placeholder="输入金额/数量"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item label="购进指标：">
        <el-select
          style="width: 100px"
          v-model="formInline.type"
          placeholder=""
        >
          <el-option label="指定渠道" value="shanghai" />
          <el-option label="不正常" value="beijing" />
        </el-select>
        <el-button style="width: 100px" class="ml-15">请选择渠道</el-button>
      </el-form-item>
      <div style="padding-left: 100px; width: 100%">
        <el-table
          :data="tableData"
          :scrollbar-always-on="false"
          style="width: 100%"
        >
          <el-table-column prop="date" label="指定渠道编码" />
          <el-table-column prop="name" label="指定渠道名称" />
          <el-table-column prop="address" label="所在省" />
        </el-table>
      </div>
    </el-form>
    <divider num="2" title="产品政策"></divider>
    <div class="contianer">
      <div class="contianer-header">
        <el-button type="primary">添加产品</el-button>
        <div class="text">购进总指标（万元）：<span>￥152.65</span></div>
        <div class="text">
          指标按季度分解（万元）：<span
            >【Q1】￥12.5，【Q2】￥12.5，【Q3】￥12.5，【Q4】￥12.5</span
          >
        </div>
        <div class="text">纯销总指标（万元）：<span>￥152.65</span></div>
      </div>
      <div class="contianer-addPrdBox">
        <div class="contianer-addPrdBox-header">
          <div class="contianer-addPrdBox-header-left">
            <div class="prd">
              产品：<el-button>选择产品</el-button>
              <span class="prdName">美复胶丸 24/1盒</span>
            </div>
            <div class="date">
              协议效期：
              <el-date-picker
                v-model="dateValue"
                type="daterange"
                start-placeholder="Start date"
                end-placeholder="End date"
                :default-time="defaultTime"
              />
            </div>
          </div>
          <div class="contianer-addPrdBox-header-right">
            <el-button style="color: #fec574; font-size: 12px">删除</el-button>
          </div>
        </div>
        <div class="contianer-addPrdBox-tables">
          <div class="tab-item">
            <div class="item" v-for="item in prdTableDataLsit" :key="item.id">
              <div class="th">{{ item.name }}</div>
              <div class="tr">
                <el-input class="tab-input" placeholder="请输入" />
              </div>
            </div>
          </div>
          <div class="tab-item" style="margin-top: 10px">
            <div class="item" v-for="item in prdTableDataLsit2" :key="item.id">
              <div class="th">{{ item.name }}</div>
              <div class="tr">
                <template v-if="item.domType === 'input'">
                  <el-input class="tab-input" />
                </template>
                <template v-else>
                  <el-select
                    class="tab-input"
                    v-model="item.type"
                    placeholder=""
                  >
                    <el-option
                      :label="select.label"
                      :value="select.value"
                      v-for="select in item.typeData"
                    />
                  </el-select>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <divider num="3" title="补充协议"></divider>
    <footer>
      <el-tabs
        v-model="activeName"
        type="card"
        class="demo-tabs"
        @tab-click="handleClick"
      >
        <el-tab-pane class="tab-pane" label="User" name="first">
          <div class="text">
            协议内容1：
            <el-button>删除</el-button>
          </div>
          <el-input
            v-model="textarea"
            maxlength="60"
            placeholder="Please input"
            type="textarea"
          />
        </el-tab-pane>
        <el-tab-pane class="tab-pane" label="Config" name="second">
          <div class="text">
            协议内容2：
            <el-button>删除</el-button>
          </div>
          <el-input
            v-model="textarea"
            maxlength="60"
            placeholder="Please input"
            type="textarea"
          />
        </el-tab-pane>
      </el-tabs>
    </footer>
    <div class="save">
      <el-button type="primary">保存</el-button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import Divider from "../components/Divider.vue";

const formInline = reactive({
  user: "",
  region: "正常",
  name: "",
  title: "",
  type: "指定渠道",
});
const dateValue = ref("");
const rules = reactive({
  user: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
  ],
});

const tableData = [
  {
    date: "BJ000001",
    name: "宁波九州药业有限公司",
    address: "浙江省",
  },
  {
    date: "BJ000001",
    name: "宁波九州药业有限公司",
    address: "浙江省",
  },
  {
    date: "BJ000001",
    name: "宁波九州药业有限公司",
    address: "浙江省",
  },
];

const prdTableDataLsit = [
  { id: 1, name: "协议价（元）" },
  { id: 2, name: "票折（元）" },
  { id: 3, name: "购进指标量（大单位）" },
  { id: 4, name: "购进指标量（小单位）" },
  { id: 5, name: "购进金额（万元）" },
  { id: 6, name: "纯销指标量（小单位）" },
  { id: 7, name: "纯销指标量（大单位）" },
];

const prdTableDataLsit2 = reactive([
  { id: 1, name: "分销奖励", domType: "input" },
  {
    id: 2,
    name: "费用科目",
    domType: "select",
    type: "单选1",
    typeData: [
      { label: "单选1", value: "单选1" },
      { label: "多选2", value: "多选2" },
    ],
  },
  { id: 3, name: "零售配送", domType: "input" },
  {
    id: 4,
    name: "费用科目",
    domType: "select",
    type: "多选项2",
    typeData: [
      { label: "单选1", value: "单选1" },
      { label: "多选2", value: "多选2" },
    ],
  },
  { id: 5, name: "医疗配送商", domType: "input" },
  {
    id: 6,
    name: "费用科目",
    domType: "select",
    type: "多选项2",
    typeData: [
      { label: "单选1", value: "单选1" },
      { label: "多选2", value: "多选2" },
    ],
  },
  { id: 7, name: "自定义7", domType: "input" },
  { id: 8, name: "自定义8", domType: "input" },
]);

const activeName = ref("first");

const handleClick = (tab, event) => {
  console.log(tab, event);
};
const textarea = ref("");
</script>

<style>
.el-table th {
  background-color: #f8f8f8 !important;
}
.el-tabs__header {
  margin-bottom: 1px !important;
}
.el-tabs__nav {
  background-color: #fff;
}
.el-textarea__inner {
  height: 100px;
}
</style>
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

.contianer {
  &-header {
    display: flex;
    align-items: center;

    .text {
      margin-left: 40px;

      span {
        font-weight: 600;
      }
    }
  }

  &-addPrdBox {
    background-color: #fff;
    margin-top: 10px;
    border-radius: 10px;

    &-header {
      display: flex;
      padding: 10px;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid #eee;

      &-left {
        display: flex;
        align-items: center;
        font-size: 14px;

        .prd {
          margin-left: 20px;
          margin-right: 50px;
          display: flex;
          align-items: center;

          .prdName {
            font-size: 12px;
            color: #5997fe;
            margin-left: 20px;
          }
        }

        .date {
          display: flex;
          align-items: center;
        }
      }
    }

    &-tables {
      padding: 20px;

      .tab-item {
        width: 100%;
        // height: 100px
        border: 1px solid #eee;
        display: flex;
        align-items: center;

        .item {
          flex: 1;

          .th {
            height: 35px;
            line-height: 35px;
            background-color: #f8f8f8;
            // margin-left: 10px;
            padding-left: 10px;
            border-bottom: 2px solid #eee;
          }

          .tr {
            width: 100%;
            // margin-left: 10px;
            // padding-left: 10px;
            padding: 10px;
            // background-color: pink;
          }

          .tab-input {
            width: 100%;
            flex: 1;
            // width: 200px;
          }
        }
      }
    }
  }
}
.demo-tabs {
  .tab-pane {
    background-color: #fff;
    padding: 20px;
    .text {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
    }
  }
}
.save {
  background-color: #fff;
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
}
</style>
