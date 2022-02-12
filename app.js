//app.js
App({
  onLaunch: function(){
    wx.cloud.init({
      env: "sorting-88tzu"
    })
  },
  globalData:{
    detail: ["one.txt", "two.txt", "three.txt", "four.txt"]
  }
})


// {
//   "pagePath": "pages/game/game",
//   "text": "测试",
//   "iconPath": "icons/测试.png",
//   "selectedIconPath": "icons/测试.png"
// },