export function getSessionId() {
  return wx.getStorageSync("cur_sessionId");
}

export function setSessionId(sessionId) {
  wx.setStorageSync("cur_sessionId", sessionId);
}

export function setUserId(userId) {
  wx.setStorageSync("cur_userId", userId);
}

export function getUserId() {
  return wx.getStorageSync("cur_userId");
}

/**
 * 防抖
 * @param func
 * @param wait
 * @param immediate
 * @returns {Function}
 */
export const debounce = (func, wait, immediate) => {
  let timeout;
  return function() {
    let context = this;
    let args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
/**
 * 节流
 * @param func
 * @param wait
 * @param mustRun
 * @returns {Function}
 */
export const throttle = (func, wait, mustRun) => {
  let timeout;
  let startTime = new Date();

  return function() {
    let context = this;
    let args = arguments;
    let curTime = new Date();

    clearTimeout(timeout);
    // 如果达到了规定的触发时间间隔，触发 handler
    if (curTime - startTime >= mustRun) {
      func.apply(context, args);
      startTime = curTime;
      // 没达到触发间隔，重新设定定时器
    } else {
      timeout = setTimeout(func, wait);
    }
  };
};
/**
 * 生成流水号
 * @returns String
 */
export const guidNum = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
/**
 * 深拷贝
 * @param {*} cloneObj
 * @returns
 */
export const deepClone = (cloneObj) => {
  if (!cloneObj || typeof cloneObj !== "object") return cloneObj;
  let obj;
  obj = typeof cloneObj === "object" && Array.isArray(cloneObj) ? [] : {};
  for (let key in cloneObj) {
    if (Object.prototype.hasOwnProperty.call(cloneObj, key)) {
      let value = cloneObj[key];
      obj[key] = typeof value === "object" ? deepClone(value) : value;
    }
  }
  return obj;
};
