const baseUrl = "http://chalkcloud.cn/se/Services";
//const baseUrl = "http://localhost";
const request = (url = "", data = {}, type = "GET", header = {}) => {
  return new Promise((resolve, reject) => {
    uni
      .request({
        method: type,
        url: baseUrl + url,
        data: data,
        header: {
          // "Content-Type": "application/x-www-form-urlencoded",
          ...header,
        },
        dataType: "json",
      })
      .then((response) => {
        setTimeout(function() {
          uni.hideLoading();
        }, 200);
        let [error, res] = response;
        resolve(res.data);
      })
      .catch((error) => {
        let [err, res] = error;
        reject(err);
      });
  });
};
export default request;
