<template>
  <view class="history-wrapper">
    <view class="workflow-ul">
      <view class="workflow-item" v-for="(item,index) in list" :key="index">
        <view class="left-section">
          <view class="workflow-img-wrapper">
            <view class="workflow-item-img flex-center">{{item.name&&item.name.slice(-2)}}</view>
            <view class="workflow-status" v-if="item.status!=='0'">
              <van-icon name="success" size="10px" class="icon success" v-if="item.status==='1'" />
              <van-icon name="cross" size="10px" class="icon fail" v-if="item.status==='-1'" />
            </view>
          </view>
        </view>
        <view class="right-section">
          <view class="workflow-item-content">
            <view class="top">
              <view class="workflow-item-title">{{item.nodeName}}({{item.name}})</view>
              <view class="time">{{item.time}}</view>
            </view>
            <view class="workflow-item-desc">说明: {{item.desc}}</view>
          </view>

        </view>
        <view class="dl-root"></view>
      </view>

    </view>
  </view>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.workflow-ul {
  display: flex;
  flex-direction: column;
  margin: 12px 16px;
  border-radius: 10px;
  background: #ffffff;
  padding: 10px 16px;
  .workflow-item {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .dl-root {
      width: 80%;
      height: 60rpx;
      margin: 10rpx 40rpx;
      border-left: 2px solid #cccccc;
    }

    .left-section {
      display: flex;
      width: 42px;
    }
    .right-section {
      font-size: 12px;
      display: flex;
      flex: 1;
    }
    .workflow-img-wrapper {
      position: relative;
      height: fit-content;
      .workflow-item-img {
        width: 68rpx;
        height: 68rpx;
        background: #1989fa;
        border-radius: 8rpx;
        padding: 8rpx;
        display: flex;
        font-size: 14px;
        color: #ffffff;
      }
      .workflow-status {
        position: absolute;
        right: -8px;
        bottom: -6px;
        .icon {
          color: #ffffff;
          border-radius: 50%;
          border: 2px solid #ffffff;
          padding: 4rpx;
          &.success {
            background: $uni-color-success;
          }
          &.fail {
            background: $uni-color-error;
          }
        }
      }
    }

    .workflow-item-content {
      display: flex;
      flex: 1;
      flex-direction: column;
      padding-left: 32rpx;
      justify-content: center;
      .top {
        display: flex;
        justify-content: space-between;
      }
      .workflow-item-title {
        font-size: 14px;
      }
      .workflow-item-desc {
        font-size: 12px;
        color: #969799;
      }
    }
  }
}
</style>
