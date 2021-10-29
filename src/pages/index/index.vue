<template>
  <view class="content">
    <view class="user-info">
      <image class="userinfo-avatar" :src="userInfo.avatarUrl"></image>
      <text class="userinfo-nickname">{{ userInfo.nickName }}</text>
      <text class="userinfo-userId">{{ userId }}</text>
    </view>

    <view>
      <van-button type="primary" size="small" @click="login">登录</van-button>
      <van-button type="primary" size="small" @click="getUserProfile"
        >获取info</van-button
      >
    </view>
  </view>
</template>
<script>
import { getSessionId, setSessionId, setUserId } from "../../utils/util";
export default {
  data() {
    return {
      userId: "",
      userInfo: {
        nickName: "未登录",
        avatarUrl: "/static/logo.png",
      },
      firstLoading: uni.getStorageSync("firstLoading") || true, //默认为true
    };
  },
  onLoad() {
    this.login();
  },
  methods: {
    login() {
      const sessionId = getSessionId();
      //从微信服务器获取用户信息
      uni.login({
        provider: "weixin",
        success: (loginRes) => {
          //获取用户登录的code
          let code = loginRes.code;
          //登录成功后调用后台查询接口
          this.$request(
            `/wechat/login?js_code=${code}&wechatSessionId=${sessionId}`,
            {},
            "post"
          )
            .then((res) => {
              // 打印调用成功回调
              console.log(res);
              if (res.success) {
                setSessionId(res.wechatSessionId);
                this.userId = res.userId;
                setUserId(res.userId);
              } else {
                console.log("没有绑定用户,跳转到用户注册界面");
                //TODO:
              }
            })
            .catch((err) => {
              console.log(err);
            });
        },
      });
    },
    getUserProfile() {
      uni.getUserProfile({
        desc: "登录",
        success: (res) => {
          this.userInfo = res.userInfo;
        },
        fail: (err) => {
          console.log(err);
        },
      });
    },
    getInfo() {
      uni.getUserInfo({
        provider: "weixin",
        success: (infoRes) => {
          console.log(infoRes);
          let nickName = infoRes.userInfo.nickName; //昵称
          let avatarUrl = infoRes.userInfo.avatarUrl; //头像
          this.userInfo = infoRes.userInfo;
          uni.setStorageSync("firstLoading", false); //记录是否第一次授权  false:表示不是第一次授权
        },
        fail(res) {},
      });
    },
  },
};
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #aaa;
}
.userinfo-avatar {
  overflow: hidden;
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
