<template>
  <view class="list-info-wrapper">
    <van-tabs type="card">
      <van-tab title="基本信息" sticky>
        <view class="content-wrapper">
          <van-cell-group :inset="true">
            <van-cell title="名称" value="中国银行" />
            <van-cell title="订单金额" title-width="200rpx" value="51,000.00 (未税:44,850.47)" />
            <van-cell title="账期(天)" value="90" />
            <van-cell title="送货日" value="2021-09-22" />
            <van-cell title="说明" title-width="200rpx" value="这是内容说明..." />
            <van-cell title="状态" value="工作中" />
          </van-cell-group>
        </view>
      </van-tab>
      <van-tab title="收款明细">
        <view class="content-wrapper">
          <view class="wrapper-card">
            <van-cell-group :inset="true">
              <van-cell title="类型" value="AAA" />
              <van-cell title="金额" title-width="200rpx" value="51,000.00 (未税:44,850.47)" />
              <van-cell title="日期" value="2021-12-16" />
              <van-cell title="说明" value="" />
              <van-cell title="状态" value="编辑中" />
              <van-cell title="编号" value="200086" />
            </van-cell-group>
          </view>
          <view class="wrapper-card">
            <van-cell-group :inset="true">
              <van-cell title="类型" value="AAA" />
              <van-cell title="金额" title-width="200rpx" value="51,000.00 (未税:44,850.47)" />
              <van-cell title="日期" value="2021-12-16" />
              <van-cell title="说明" value="" />
              <van-cell title="状态" value="编辑中" />
              <van-cell title="编号" value="200086" />
            </van-cell-group>
          </view>

        </view>

      </van-tab>
      <van-tab title="附件">
        <view class="content-wrapper">
          <view class="section">
            <view class="title">
              添加附件
            </view>
            <view class="content">
              <van-uploader :file-list="fileList" />
            </view>
          </view>
        </view>

      </van-tab>
    </van-tabs>
  </view>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      show: false,
      date: this.value,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.list-info-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: #e9ecf3;
  overflow: auto;
  padding: 20rpx 0;
}
.content-wrapper {
  padding-top: 20rpx;
}
.wrapper-card {
  margin-bottom: 20rpx;
}
</style>
