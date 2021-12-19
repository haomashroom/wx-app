<template>
  <view class="table-list">
    <van-cell-group>
      <van-cell is-link v-for="(item,index) in data" :key="index" @click="onClick(item)">
        <view slot="title">
          <view class="van-cell-text">
            <view class="num">{{index}}</view>
            <view class="title">{{item.title}}</view>
          </view>
        </view>
        <view class="content">
          <view class="desc">{{item.amount}}</view>
          <view class="time">{{item.time}}</view>
        </view>
      </van-cell>
    </van-cell-group>
  </view>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  data() {
    return {};
  },
  methods: {
    onClick(item) {
      this.$emit("onClickCell", item);
    },
  },
};
</script>
<style lang="scss" scoped>
.van-cell-text {
  display: flex;
  align-items: center;
  .num {
    width: 42rpx;
    text-align: center;
    background: #1989fb;
    border-radius: 50%;
    height: 42rpx;
    line-height: 42rpx;
    color: #ffffff;
    font-size: 12px;
    margin-right: $uni-spacing-row-base;
  }
}
.content {
  display: flex;
  justify-content: space-between;
  .desc {
    color: $uni-text-color;
  }
}
</style>
