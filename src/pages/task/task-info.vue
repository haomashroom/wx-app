<template>
  <view class="task-wrapper">
    <view calss="search-wrapper">
      <van-search :value="searchTxt" placeholder="搜索标题、编号、正文内容" style="width:100%" @search="onSearch" />
    </view>
    <scroll-view class="fix-flex" :scroll-y="true">
      <view class="content-wrapper">
        <view class="task-item" v-for="(item,index) in list" :key="index" @click="goDetailTask(item)">
          <view class="header">
            <view class="title">{{item.title}}</view>
            <view class="time">{{item.time}}</view>
          </view>
          <view class="body" v-html="item.content">

          </view>
          <view class="footer">
            <view class="desc">
              由<text class="author">{{item.author}}</text>提交
            </view>
            <view class="btn status">
              <view :class="'st-'+item.status">{{showStatus(item.status)}}</view>
            </view>

          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      searchTxt: "",
      list: [
        {
          title: "销售订单申请",
          time: "2021.11.30",
          content: "我这个申请需要一个粗略的内容描述....",
          author: "张小涛",
          status: "1",
        },
        {
          title: "销售订单申请",
          time: "2021.11.30",
          content: "我这个申请需要一个粗略的内容描述....",
          author: "张小涛",
          status: "2",
        },
        {
          title: "销售订单申请",
          time: "2021.11.30",
          content: "我这个申请需要一个粗略的内容描述....",
          author: "张小涛",
          status: "3",
        },
        {
          title: "销售订单申请",
          time: "2021.11.30",
          content: "我这个申请需要一个粗略的内容描述....",
          author: "张小涛",
          status: "2",
        },
        {
          title: "销售订单申请",
          time: "2021.11.30",
          content: "我这个申请需要一个粗略的内容描述....",
          author: "张小涛",
          status: "1",
        },
        {
          title: "销售订单申请",
          time: "2021.11.30",
          content: "我这个申请需要一个粗略的内容描述....",
          author: "张小涛",
          status: "0",
        },
        {
          title: "销售订单申请",
          time: "2021.11.30",
          content: "我这个申请需要一个粗略的内容描述....",
          author: "张小涛",
          status: "0",
        },
        {
          title: "销售订单申请",
          time: "2021.11.30",
          content: "我这个申请需要一个粗略的内容描述....",
          author: "张小涛",
          status: "3",
        },
        {
          title: "销售订单申请",
          time: "2021.11.30",
          content: "我这个申请需要一个粗略的内容描述....",
          author: "张小涛",
          status: "1",
        },
        {
          title: "销售订单申请",
          time: "2021.11.30",
          content: "我这个申请需要一个粗略的内容描述....",
          author: "张小涛",
          status: "1",
        },
      ],
    };
  },
  methods: {
    onSearch(event) {
      this.$emit("onSearch", event.detail, (data) => {
        this.searchList = data;
      });
    },
    showStatus(status) {
      switch (status) {
        case "0":
          return "审批拒绝";
        case "1":
          return "审批通过";
        case "2":
          return "已撤销";
        case "3":
          return "正在审批";
      }
    },
    goDetailTask(item) {
      uni.navigateTo({
        url: "/pages/task/task?id=1&name=uniapp",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.task-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.content-wrapper {
  width: 100%;
  background: #f3f3f3;
  display: flex;
  flex-direction: column;
  padding: 20rpx 0;
  .task-item {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    padding: 24rpx;
    margin: 0 20rpx;
    border-radius: 10rpx;
    flex-wrap: wrap;
    margin-bottom: 20rpx;
    .header,
    .footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .header,
    .body {
      margin-bottom: 20rpx;
    }
    .header {
      .title {
        font-size: 16px;
      }
      .time {
        font-size: 12px;
        color: #969799;
      }
    }
    .body {
      color: #969799;
      font-size: 12px;
    }

    .footer {
      align-items: center;
      .desc {
        font-size: 12px;
        .author {
          margin: 0 8rpx;
        }
      }
      .btn {
        padding: 10rpx;
        background: #ebf9ff;
        font-size: 10px;
      }
      .st-1 {
        color: #07c160;
      }
      .st-0 {
        color: #ee0a24;
      }
      .st-2 {
        color: #969799;
      }
      .st-3 {
        color: #1989fb;
      }
    }
  }
}
</style>
