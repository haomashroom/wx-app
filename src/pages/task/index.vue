<!--任务界面  @onChange="onSelect" -->
<template>
  <view class="form-page-wrapper">
    <view class="form-body">
      <van-divider contentPosition="left">业务信息</van-divider>
      <van-cell-group>
        <van-field label="项目名称" :value="projectName" placeholder="请输入用户名" @change="onChange" />
        <my-select label="供应商" v-model="supplier" showSearch :defaultOptions="testData" :onSearch="onSearch"></my-select>
        <my-select label="订单类型" :defaultOptions="testData1" @onSelect="onSelect"></my-select>
        <calendar label="订单日期" v-model="date1"></calendar>
        <date-picker label="订单日期" v-model="date2"></date-picker>
      </van-cell-group>
      <van-divider contentPosition="left">上传附件</van-divider>
      <van-uploader :file-list="fileList" />
      <approval-process :list="processList" @onCloseItem="onCloseItem" :onLoadData="onLoadData" @onSearch="onSearch" @onSelect="onSelect"></approval-process>
    </view>
    <view class="footer-wrapper">
      <van-button round type="info" block>提交</van-button>
    </view>
  </view>
</template>

<script>
import select from "@/components/filed-select/index.vue";
import calendar from "@/components/filed-calendar/index.vue";
import datePicker from "@/components/filed-datepicker/index.vue";
import approvalProcess from "@/components/approval-process/index.vue";
import { debounce } from "../../utils/util";
const data = [
  { name: "林晨", desc: "信息技术中心" },
  { name: "刘琛", desc: "体育中心" },
  { name: "张三", desc: "够爱的IE" },
  { name: "林晨", desc: "信息技术中心" },
  { name: "林啊四", desc: "信息技术中心" },
  { name: "刘大可", desc: "信息技术中心" },
  { name: "王小六", desc: "信息技术中心" },
  { name: "林晨1", desc: "信息技术中心" },
  { name: "林晨2", desc: "信息技术中心" },
  { name: "林晨3", desc: "信息技术中心" },
];
export default {
  components: {
    mySelect: select,
    calendar,
    datePicker,
    approvalProcess,
  },
  computed: {
    testData() {
      return [
        { text: "", value: "0" },
        { text: "上海", value: "1" },
        { text: "北京", value: "2" },
        { text: "温州", value: "3" },
      ];
    },
    testData1() {
      return [
        { text: "", value: "0" },
        { text: "库存采购", value: "1" },
        { text: "推销细节", value: "2" },
        { text: "内部渠道", value: "3" },
      ];
    },
  },
  data() {
    return {
      projectName: "你好",
      supplier: "megalink",
      list: [],
      date1: "2021/11/12",
      date2: "2021/11/11",
      fileList: [],
      processList: [],
    };
  },

  created() {
    this.processList = [
      { name: "process1", title: "审批工程师", list: ["刘振俊", "张小涛"] },
      { name: "process2", title: "审批经理", list: ["邵文佳"] },
    ];
  },
  mounted() {},
  methods: {
    test() {
      console.log(this.supplier);
      console.log(this.projectName);
      console.log(this.date1);
      console.log(this.date2);
    },
    onChange(data) {
      this.projectName = data.detail;
    },
    onChange1(data) {
      const { picker, value, index } = data.detail;
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onSelect(value) {
      console.log(value);
    },
    //搜索内容
    onSearch: debounce((value, callback) => {
      console.log("aaa", value);
      setTimeout(() => {
        const res = [{ text: "", value: "0" }];
        const data = [
          { text: "杭州", value: "1" },
          { text: "宁波", value: "2" },
          { text: "温州", value: "3" },
        ];
        callback([...res, ...data]);
      }, 200);
    }, 500),
    //删除筛选人
    onCloseItem({ cur, index, i }) {
      console.log(cur, index, i);
      this.processList[index].list.splice(i, 1);
      console.log(this.processList);
    },
    onLoadData({ item, index }, callback) {
      console.log("item", item, index);
      setTimeout(() => {
        callback(data);
      }, 800);
    },
    onSearch(txt, callback) {
      const res = data.filter((item) => item.name.indexOf(txt) > -1);
      callback(res);
    },
    onSelect(selectItem, openItem) {
      // openItem.list.push(selectItem.name);
      const obj = this.processList.find((d) => d.name === openItem.name);
      obj.list.push(selectItem.name);
      console.log(this.processList);
    },
  },
};
</script>
<style lang="scss" scoped>
.form-page-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .form-body {
    flex: 1;
    overflow: auto;
  }
  .footer-wrapper {
    background: #ffffff;
    line-height: 100rpx;
    flex: 0 0 100rpx;
    padding: 20rpx 20rpx 0;
  }
}
</style>
