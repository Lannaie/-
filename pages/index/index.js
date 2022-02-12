Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal1: false,
    showModal2: false,
    showModal4: false,
    showModal5: false,
    showModal6: false,
    showModal7: false,
    showModal8: false,
    choose: 0
  },
  
  mb4_: function(e){
    const id = e.target.dataset.text
    wx.navigateTo({
      url: '../jump/jump?id=' + id,
    })
  },

  //回收桶
  recoverable: function () {
    this.setData({
      showModal5: true
    })
  },
  go5: function () {
    this.setData({
      showModal5: false
    })
  },

  //有害桶
  harmful: function () {
    this.setData({
      showModal6: true
    })
  },
  go6: function () {
    this.setData({
      showModal6: false
    })
  },

  //厨余桶
  food: function () {
    this.setData({
      showModal7: true
    })
  },
  go7: function () {
    this.setData({
      showModal7: false
    })
  },


  //其他桶
  other: function () {
    this.setData({
      showModal8: true
    })
  },
  go8: function () {
    this.setData({
      showModal8: false
    })
  },

onLoad(option){
}
})