<template>
  <view class="approval-wrapper">
    <van-collapse :value="activeNames" @change="onChange">
      <van-collapse-item title="审批流程" name="approval" icon="send-gift-o">
      </van-collapse-item>
    </van-collapse>
  </view>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
  },
  data() {
    return {
      activeNames: ["approval"],
    };
  },
  methods: {
    onChange(event) {
      this.activeNames = event.detail;
    },
  },
};
</script>
<style scoped></style>
