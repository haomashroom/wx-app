<template>
  <view>
    <van-field :label="label" :value="date" @focus="onDisplay" />
    <van-popup
      :show="show"
      :overlay="true"
      custom-style="width:100%;"
      overlay-style="background:#ffffff24;"
      position="bottom"
      @click-overlay="onBlur"
    >
      <van-datetime-picker
        type="date"
        :value="currentDate"
        :formatter="formatter"
        @input="onInput"
        @cancel="onBlur"
        @confirm="confirm"
      />
    </van-popup>
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
      show: false,
      date: this.value,
      currentDate: new Date().getTime(),
      formatter(type, value) {
        if (type === "year") {
          return `${value}年`;
        }
        if (type === "month") {
          return `${value}月`;
        }
        return value;
      },
    };
  },
  computed: {},
  methods: {
    onDisplay() {
      this.show = true;
      this.stop();
    },
    onBlur() {
      this.show = false;
    },
    onInput(event) {
      this.currentDate = event.detail;
    },
    formatDate(date) {
      date = new Date(date);
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
    confirm() {
      this.show = false;
      this.date = this.formatDate(this.currentDate);
      this.$emit("input", this.date);
    },
  },
};
</script>
<style scoped></style>
