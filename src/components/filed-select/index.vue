<!--Select 组件 -->
<template>
  <view>
    <van-field
      :label="label"
      :value="displayValue"
      :placeholder="placeholder"
      @change="onChange"
      @focus="onFocus"
    />
    <van-popup
      :show="show"
      :overlay="true"
      custom-style="width:100%;"
      overlay-style="background:#ffffff24;"
      position="center"
      @click-overlay="onBlur"
    >
      <van-picker
        :columns="selectArr"
        @change="onSelect"
        :show-toolbar="false"
        :item-height="36"
      />
    </van-popup>
  </view>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    placeholder: String,
    defaultOptions: {
      type: Array,
      default: () => [],
    },
    showSearch: {
      type: Boolean,
      default: false,
    },
    onSearch: Function,
  },
  computed: {
    cssStyle() {
      return {
        width: "100%",
        // background: "red",
      };
    },
  },
  data() {
    return {
      displayValue: this.value,
      selectArr: this.defaultOptions,
      show: false,
    };
  },
  methods: {
    //input聚焦
    onFocus() {
      if (this.selectArr) {
        this.show = true;
      }
    },
    onBlur() {
      this.show = false;
      this.$emit("input", this.displayValue);
    },
    /**
     * 下拉框选中
     */
    onSelect(data) {
      const res = data.detail;
      const displayValue = res.value;
      this.$emit("onSelect", displayValue);
      if (typeof displayValue === "object") {
        this.displayValue = displayValue.text;
      } else {
        this.displayValue = displayValue;
      }
      this.$emit("input", this.displayValue);
      this.show = false;
    },
    /**
     * input框输入改变
     */
    onChange(data) {
      const value = data.detail;
      this.displayValue = value;
      if (this.showSearch) {
        this.onSearch(value, (res) => {
          this.selectArr = res;
          this.show = true;
        });
      } else {
        this.show = true;
      }
    },
  },
};
</script>
<style scoped></style>
