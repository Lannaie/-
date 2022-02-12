Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false,
    showModal5: false,
    showModal6: false,
    showModal7: false,
    showModal8: false,
    choose: 0
  },

  imgLoad(e){
    console.log(`图片加载成功，width: ${ev.detail.width}; height: ${ev.detail.height}`)
      this.setData({
        choose: 1
      })
  },

  //什么是垃圾分类
  classify: function () {
    wx.navigateTo({
      url: '../jump/jump?id=0',
    })
  },

  //垃圾分类的好处
  benefit: function () {
    wx.navigateTo({
      url: '../jump/jump?id=1',
    })
  },

//垃圾桶的标志
  signal: function () {
    wx.navigateTo({
      url: '../jump/jump?id=2',
    })
  },

  //垃圾分类的小知识
  know: function () {
    wx.navigateTo({
      url: '../jump/jump?id=3',
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