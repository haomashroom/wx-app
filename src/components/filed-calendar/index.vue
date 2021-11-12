<template>
  <view>
    <van-field
      :label="label"
      :value="date"
      @change="onChange"
      @focus="onDisplay"
    />
    <van-calendar
      :show="show"
      @close="onClose"
      @confirm="onConfirm"
    ></van-calendar>
  </view>
</template>

<script>
import hideKeyboard from "@/mixins/hideKeyboard";
export default {
  props: {
    label: String,
    value: String,
  },
  mixins: [hideKeyboard],
  data() {
    return {
      show: false,
      date: this.value,
    };
  },
  methods: {
    onDisplay() {
      this.show = true;
      this.stop();
    },
    onClose() {
      this.show = false;
    },
    formatDate(date) {
      date = new Date(date);
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },

    onConfirm(event) {
      this.show = false;
      this.date = this.formatDate(event.detail);
      this.$emit("input", this.date);
    },
  },
};
</script>
<style scoped></style>
