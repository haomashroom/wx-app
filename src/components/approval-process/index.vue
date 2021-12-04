<template>
  <view class="approval-wrapper">
    <van-collapse :value="activeNames" @change="onChange">
      <van-collapse-item title="审批流程" name="approval" icon="send-gift-o">
        <view class="process-wrapper" v-for="(item,index) in list" :key="index">
          <view class="process-item">
            <view class="img-wrapper flex-center">
              <view class="img-circle"></view>
            </view>
            <view class="content-wrapper">
              <view class="process-title">{{item.title}}</view>
              <view class="process-tip" v-if="!item.list.length">请选择审批人1</view>
            </view>
            <view class="select-wrapper">
              <view class="select-content flex-box">
                <view class="select-item" v-for="(cur,i) in item.list" :key="i">
                  <view class="close" @click="close(cur,index,i)">X</view>
                  <view class="desc flex-center">{{cur.slice(-2)}}</view>
                  <view class="name"><text>{{cur}}</text></view>
                </view>
              </view>
              <view class="select-icon" @click="showSearchList(item,index)">
                <van-icon name="plus" size="18px" color="#1989fa" />
              </view>
            </view>
          </view>
        </view>
      </van-collapse-item>
    </van-collapse>
    <van-popup :show="show" :overlay="true" round closeable custom-style="width:100%;height:90%" position="bottom" @close="onClose" @click-overlay="onClose">
      <view class="search-wrapper">

        <view class="search-title">请选择</view>
        <view class="search-content fix-flex">
          <view style="width:100%">
            <van-search :value="searchTxt" placeholder="请输入搜索关键词" style="width:100%" @search="onSearch" />
          </view>
          <scroll-view class="fix-flex" :scroll-y="true">
            <view class="search-ul">
              <view class="search-list-item" v-for="(item,index) in searchList" :key="index" @click="onSelect(item)">
                <view class="search-item-img flex-center">{{item.name&&item.name.slice(-2)}}</view>
                <view class="search-item-content">
                  <view class="search-item-title">{{item.name}}</view>
                  <view class="search-item-desc">{{item.desc}}</view>
                </view>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
    </van-popup>
  </view>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    onLoadData: Function,
  },
  data() {
    return {
      activeNames: ["approval"],
      show: false,
      searchTxt: "",
      searchList: [],
    };
  },
  methods: {
    onChange(event) {
      this.activeNames = event.detail;
    },
    close(cur, index, i) {
      this.$emit("onCloseItem", { cur, index, i });
    },
    onClose() {
      this.show = false;
    },
    showSearchList(item, index) {
      console.log(item, index);
      this.openItem = item;
      if (this.onLoadData) {
        this.onLoadData({ item, index }, (data) => {
          this.searchList = data;
          this.show = true;
        });
      } else {
        this.show = true;
      }
    },
    onSearch(event) {
      this.$emit("onSearch", event.detail, (data) => {
        this.searchList = data;
      });
    },
    onSelect(item) {
      this.$emit("onSelect", item, this.openItem);
      this.show = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.process-wrapper {
  height: fit-content;
  .process-item {
    width: 100%;
    height: 120rpx;
    display: flex;
    border-bottom: 1px solid #ebedf0;
    margin-bottom: 10px;
    .img-wrapper {
      width: 80rpx;
      height: 100%;
      .img-circle {
        width: 24rpx;
        height: 24rpx;
        background: #969799;
        border-radius: 50%;
      }
    }
    .content-wrapper {
      display: flex;
      flex-direction: column;
      min-width: 200rpx;
      padding: 4rpx 0;
      justify-content: center;
      .process-title {
        font-size: 14px;
        color: #1c1e21;
      }
      .process-tip {
        font-size: 12px;
      }
    }
    .select-wrapper {
      display: flex;
      justify-content: flex-end;
      flex: 1;
      align-items: center;
      .select-icon {
        padding: 8rpx;
        border-radius: 8rpx;
        border: 2rpx dashed #1989fa;
      }
      .select-item {
        display: flex;
        flex-direction: column;
        margin-right: 16rpx;
        position: relative;
        .close {
          width: 32rpx;
          height: 32rpx;
          background: #383737;
          border-radius: 50%;
          color: white;
          position: absolute;
          right: -8rpx;
          top: -8rpx;
          text-align: center;
          font-size: 9px;
        }
        .desc {
          width: 24px;
          height: 24px;
          background: #1989fa;
          border-radius: 8rpx;
          padding: 8rpx;
          display: flex;
          font-size: 12px;
          color: #ffffff;
        }
        .name {
          text-align: center;
          text {
            font-size: 10px;
          }
        }
      }
    }
  }
}
.search-wrapper {
  display: flex;
  height: 100%;
  flex-direction: column;
  .search-title {
    height: 110rpx;
    color: #323233;
    font-weight: 500;
    text-align: center;
    line-height: 110rpx;
  }
  .search-content {
    width: 100%;
    flex-direction: column;
    .search-ul {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .search-list-item {
      width: 100%;
      height: 108rpx;
      display: flex;
      align-items: center;
      padding: 0 28rpx;
      .search-item-img {
        width: 68rpx;
        height: 68rpx;
        background: #1989fa;
        border-radius: 8rpx;
        padding: 8rpx;
        display: flex;
        font-size: 14px;
        color: #ffffff;
      }
      .search-item-content {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding-left: 32rpx;
        border-bottom: 1px solid #ebedf0;
        padding-bottom: 4px;
        .search-item-title {
          font-size: 14px;
        }
        .search-item-desc {
          font-size: 10px;
          color: #969799;
        }
      }
    }
  }
}
</style>
