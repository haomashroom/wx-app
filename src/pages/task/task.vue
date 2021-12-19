<template>
  <view class="task-page">
    <view class="task-header">
      <view :class='["task-nav-item",item.name== activeItem? "active" : ""]' v-for="(item,index) in navList" :key="index" @click="changeNav(item.name)">
        {{item.title}}
      </view>
    </view>
    <view class="task-content fix-flex">
      <view class="task-desc-page" v-if="activeItem==='taskDesc'">
        <scroll-view class="fix-flex" :scroll-y="true">
          <view class="desc-content">
            <van-cell-group title="订单信息" :inset="true">
              <van-cell title="DEALID" value="100026" />
              <van-cell title="客户" value="中国银行" />
              <van-cell title="名称" value="中国银行" />
              <van-cell title="订单金额" title-width="200rpx" value="51,000.00 (未税:44,850.47)" />
              <van-cell title="订单税率" value="16%" />
              <van-cell title="采购结算" value="0.00" />
              <van-cell title="毛利率" value="0.00%" />
              <van-cell title="实际利润" value="0.00" />
              <van-cell title="已收" value="0.00" />
              <van-cell title="到款日期" value="2021-09-27" />
              <van-cell title="订单日期" value="2021-09-27" />
              <van-cell title="创建人" value="销售二(Sales2)" />
              <van-cell title="说明" title-width="200rpx" value="这是内容说明..." />
            </van-cell-group>
            <view class="section">
              <view class="title">
                附件
              </view>
              <view class="content">
                <van-uploader :file-list="fileList" />
              </view>
            </view>
            <van-divider />
            <van-collapse :value="activeNames" @change="onChange">
              <van-collapse-item title="销售账期" name="saleAccount" icon="todo-list-o" content-class="no-padding">
                <tableList :data="saleAccountList" @onClickCell="goSaleAccountInfo"></tableList>
              </van-collapse-item>
              <van-divider />
              <van-collapse-item title="采购账期" name="purchaseAccount" icon="balance-list-o" content-class="no-padding">
                <tableList :data="purchaseAccountList"></tableList>
              </van-collapse-item>
            </van-collapse>

          </view>
        </scroll-view>
        <view class="footer-wrapper">
          <view class="action-btn">
            <van-button round type="info" size="small" block>通过</van-button>
          </view>
          <view class="action-btn">
            <van-button round type="default" size="small" block>驳回</van-button>
          </view>
        </view>
      </view>
      <view class="task-history-page" v-if="activeItem==='taskHistory'">
        <History :list="histroyList"></History>
      </view>
    </view>
  </view>
</template>

<script>
import tableList from "@/components/table-list/index.vue";
import History from "../../components/approval-process/history.vue";
export default {
  props: {},
  components: {
    tableList,
    History,
  },
  data() {
    return {
      activeItem: "taskHistory",
      navList: [
        { name: "taskDesc", title: "任务详情" },
        { name: "taskHistory", title: "审批历史" },
      ],
      fileList: [
        {
          url: "https://img.yzcdn.cn/vant/leaf.jpg",
          name: "图片1",
        },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        {
          url: "http://iph.href.lu/60x60?text=default",
          name: "图片2",
          isImage: true,
          deletable: true,
        },
      ],
      activeNames: ["saleAccount", "purchaseAccount"],
      saleAccountList: [
        { title: "中国银行-首付款", amount: "51,000.00", time: "2021-09-22" },
        { title: "交通银行-首付款", amount: "52,000.00", time: "2021-10-12" },
      ],
      purchaseAccountList: [
        { title: "农业银行", amount: "66,000.00", time: "2021-09-23" },
      ],
      histroyList: [
        {
          id: 1,
          name: "刘大可",
          nodeName: "销售",
          desc: "报销清单",
          time: "2021-09-22 00:00:00",
          status: "1",
        },
        {
          id: 1,
          name: "张小涛",
          nodeName: "销售",
          desc: "内容填写有误,很多内容不符合规范,退回重写",
          time: "2021-09-22 00:00:00",
          status: "-1",
        },
        {
          id: 1,
          name: "邵文佳",
          nodeName: "销售",
          desc: "报销清单",
          time: "2021-09-22 00:00:00",
          status: "0",
        },
      ],
    };
  },
  methods: {
    changeNav(name) {
      this.activeItem = name;
    },
    onChange(event) {
      this.activeNames = event.detail;
    },
    goSaleAccountInfo(item) {
      console.log("info", item);
      uni.navigateTo({
        url: "/pages/task/list-info?id=1&name=uniapp",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.task-page {
  display: flex;
  height: 100%;
  flex-direction: column;
  .task-header {
    display: flex;
    height: 64rpx;
    .task-nav-item {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #9e9ea0;
      &.active {
        color: #1989fb;
        border-bottom: 2px solid #1989fb;
      }
    }
  }
  .task-desc-page,
  .task-history-page {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background: #e9ecf3;
    .desc-content {
      padding-bottom: $uni-spacing-col-lg;
    }
  }
  .footer-wrapper {
    background: #ffffff;
    flex: 0 0 100rpx;
    align-items: center;
    display: flex;
    .action-btn {
      flex: 1;
      padding: 10rpx;
    }
  }
}
</style>
