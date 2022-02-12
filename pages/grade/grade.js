// pages/grade/grade.js
Page({

  /**
  * 页面的初始数据
  */
  data: {
    right: 0,
    total: 0,
    good: ""
  },
  
  back: function () {
    wx.reLaunch({
      url: '/pages/game/game',
    })
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    this.setData({
      right: options.right,
      total: options.total
    })
    var right = parseInt(this.data.right);
    var total = parseInt(this.data.total);
    if (right >= total * 3 / 5) {
      this.setData({
        good: "真厉害^0^"
      })
    } else {
      this.setData({
        good: "有点遗憾,再接再厉呀^0^"
      })
    }
    total = right * 100 / total;
    this.setData({
      total: total
    })
  },

  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {

  },

  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {

  },

  /**
  * 生命周期函数--监听页面隐藏
  */
  onHide: function () {

  },

  /**
  * 生命周期函数--监听页面卸载
  */
  onUnload: function () {

  },

  /**
  * 页面相关事件处理函数--监听用户下拉动作
  */
  onPullDownRefresh: function () {

  },

  /**
  * 页面上拉触底事件的处理函数
  */
  onReachBottom: function () {

  },

  /**
  * 用户点击右上角分享
  */
  onShareAppMessage: function () {

  }
})