<!--任务界面  -->
<template>
  <van-tabs :active="active">
    <van-tab title="标签 1">内容 1</van-tab>
    <van-tab title="标签 2">内容 2</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 4">内容 4</van-tab>
  </van-tabs>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
    };
  },
  created() {},
  mounted() {},
};
</script>
<style scoped></style>
