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
