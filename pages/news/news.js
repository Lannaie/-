// pages/news/news.js
Page({
  toarticle: function(e){
    let index = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/artile/artile?index='+index,
    })
  }
})