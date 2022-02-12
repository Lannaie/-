// pages/news/news.js
Page({
  data:{
    list: []
  },
  toarticle: function(e){
    let index = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/artile/artile?index='+index,
    })
  },
  onLoad: function(options){
    const tmplist = []
    const db = wx.cloud.database({
      env: 'sorting-88tzu'
    })
    db.collection('txt').get({
      success: res =>{
        res.data.forEach(
          function(item, index){
            tmplist.push({ 'title': item["title"], 'info': item["info"], 'detail': item["detail"], 'image': item["image"] })
          }
        )
      }
    })
    this.setData({
      list: tmplist
    })
    // console.log(this.data.list)
  }
})