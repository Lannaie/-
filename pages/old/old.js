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
  },
  //什么是垃圾分类
  classify: function () {
    this.setData({
      showModal1: true
    })
  },

  go1: function () {
    this.setData({
      showModal1: false
    })
  },

  //垃圾分类的好处
  benefit: function () {
    this.setData({
      showModal2: true
    })
  },

  preventTouchMove: function () {
  },
  go2: function () {
    this.setData({
      showModal2: false
    })
  },


  //垃圾桶的标志
  signal: function () {
    this.setData({
      showModal3: true
    })
  },
  go3: function () {
    this.setData({
      showModal3: false
    })
  },


  //垃圾分类的小知识
  know: function () {
    this.setData({
      showModal4: true
    })
  },
  go4: function () {
    this.setData({
      showModal4: false
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


})