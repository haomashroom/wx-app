<!--任务界面  -->
<template>
  <view>
    <van-divider contentPosition="left">业务信息</van-divider>
    <van-cell-group>
      <van-field
        label="项目名称"
        :value="projectName"
        placeholder="请输入用户名"
        @change="onChange"
      />
      <my-select></my-select>
    </van-cell-group>
  </view>
</template>

<script>
import select from "@/components/select/index.vue";
console.log(select);
export default {
  components: {
    mySelect: select,
  },
  data() {
    return {
      projectName: "你好",
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
    };
  },
  created() {},
  mounted() {},
  methods: {
    onChange(data) {
      this.projectName = data.detail;
    },
    onChange1(data) {
      const { picker, value, index } = data.detail;
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
  },
};
</script>
<style scoped></style>
