export default {
  methods: {
    stop() {
      let interval = setInterval(function() {
        uni.hideKeyboard(); //隐藏软键盘
      }, 20);
      setTimeout(() => {
        clearInterval(interval);
      }, 1000);
    },
  },
};
