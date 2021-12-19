<template>
  <view class="task-page-home">
    <view class="header-nav">
      <view class="nav-item" v-for="(item,index) in navList" :key="index" @click="taskNavGo(item)">
        <view class="img-wrapper">
          <van-icon :name="item.icon" size="24px" />
        </view>
        <view class="text">
          {{item.title}}
        </view>
      </view>
    </view>
    <view class="content">
      <van-collapse :value="activeNames" @change="onChange">
        <van-collapse-item title="工作区" name="working">
          <view class="work-wrapper">
            <view class="work-item" v-for="(item,index) in workingList" :key="index" @click="workNavGo(item)">
              <view class="img-wrapper">
                <van-icon :name="item.icon" size="28px" color="#1989fa" />
              </view>
              <view class="text">
                {{item.title}}
              </view>
            </view>

          </view>
        </van-collapse-item>

      </van-collapse>

    </view>
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
      activeNames: ["working"],
      navList: [
        { name: "pending", title: "待处理", icon: "fire-o" },
        { name: "processed", title: "已处理", icon: "completed" },
        { name: "initiated", title: "已发起", icon: "records" },
        { name: "received", title: "我收到的", icon: "guide-o" },
      ],
      workingList: [
        { name: "salesOrderRequest", title: "销售订单申请", icon: "clock" },
      ],
    };
  },
  methods: {
    onChange(event) {
      this.activeNames = event.detail;
    },
    taskNavGo(item) {
      console.log(item);
      uni.navigateTo({
        url: "/pages/task/task-info",
        success: (res) => {
          uni.setNavigationBarTitle({
            title: item.title,
          });
        },
      });
    },
    workNavGo(item) {
      console.log(item);
      uni.navigateTo({
        url: "/pages/task/task-request?id=1&name=uniapp",
      });
    },
  },
};
</script>
<style  lang="scss" scoped>
.header-nav {
  display: flex;
  background: #ffffff;
  color: #323233;
  width: 100%;
  .nav-item {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    height: 108rpx;
    font-size: 14px;
    padding: 24rpx;
    justify-content: center;
  }
}
.work-wrapper {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  color: #969799;
  .work-item {
    display: flex;
    flex-direction: column;
    width: 25%;
    align-items: center;
    height: 108rpx;
    font-size: 12px;
    margin-bottom: 20rpx;
    justify-content: center;
  }
}
</style>
