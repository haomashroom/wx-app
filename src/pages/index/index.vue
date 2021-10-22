<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
      <van-button type="primary" size="small" @click="login">登录</van-button>
      <van-button type="primary" size="small" @click="getInfo"
        >获取info</van-button
      >
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      title: "dake Test111",
      isCanUse: uni.getStorageSync("isCanUse") || true, //默认为true
    };
  },
  onLoad() {},
  methods: {
    login() {
      console.log(4333);

      uni.login({
        provider: "weixin",
        success: (loginRes) => {
          console.log(loginRes);
          //获取用户登录的code
          let code = loginRes.code;
          //非第一次登录
          if (!this.isCanUse) {
            //非第一次授权获取用户信息
            uni.getUserInfo({
              provider: "weixin",
              success: function(infoRes) {
                console.log(infoRes);
                //获取用户信息后向调用信息更新方法
                let nickName = infoRes.userInfo.nickName; //昵称
                let avatarUrl = infoRes.userInfo.avatarUrl; //头像
                //_this.updateUserInfo(); //调用更新信息方法
              },
            });
          }
          //登录成功后调用后台查询接口
          //   this.$request(
          //     "/wechat/login",
          //     {
          //       wechatSessionId: "",
          //       js_code: code,
          //     },
          //     "post"
          //   )
          //     .then((res) => {
          //       // 打印调用成功回调
          //       console.log(res);
          //     })
          //     .catch((err) => {
          //       console.log(err);
          //     });
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
          try {
            uni.setStorageSync("isCanUse", false); //记录是否第一次授权  false:表示不是第一次授权
          } catch (e) {}
        },
        fail(res) {},
      });
    },
  },
};
</script>

<style>
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
