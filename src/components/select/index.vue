<!--Select 组件 -->
<template>
  <view>
    <van-field
      label="test"
      :value="value"
      placeholder="test"
      @change="onChange"
    />
    <van-picker :columns="columns" @change="onSelect" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
    };
  },
  created() {},
  mounted() {},
  methods: {
    onSelect(data) {
      console.log(data);
    },
  },
};
</script>
<style scoped></style>
