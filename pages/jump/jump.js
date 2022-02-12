// pages/jump/jump.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoList: [],
    authList: [],
    datList: [],
    sourList: [],
    titList: [],
    detList: [],
    videoImg: [],
    moreInd: [],
    total: 0,
    index: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let ind = options.id; console.log(options.id)
    let video = ["cloud://sorting-88tzu.736f-sorting-88tzu-1301418393/1583229343695.mp4",
      "cloud://sorting-88tzu.736f-sorting-88tzu-1301418393/1583229401078.mp4",
      "cloud://sorting-88tzu.736f-sorting-88tzu-1301418393/1583229453125.mp4",
      "cloud://sorting-88tzu.736f-sorting-88tzu-1301418393/1583229498809.mp4",
      "cloud://sorting-88tzu.736f-sorting-88tzu-1301418393/1583229536119.mp4"];
    let auth = ["一点快讯", "生活吐槽家", "知识小能手", "记录生活事", "生活视线"];
    let dat = ["2019/10/06", "2019/12/27", "2019/09/05", "2019/12/12", "2019/12/12"];
    let sour = ["搜狗视频", "搜狗视频", "搜狗视频", "搜狗视频", "搜狗视频"];
    let tit = ["垃圾分类，人人参与", "垃圾分类的好处和意义", "为什么要学好垃圾分类", "生活垃圾分类收集容器标准", "垃圾分类，从现在开始"];
    let det = ["垃圾分类是指按一定规定或标准将垃圾分类储存、分类投放和分类搬运，从而转变成公共资源的一系列活动的总称。",
              "1、减少环境污染。2、节省土地资源。3、利用再生资源。4、提高民众价值观念。5、减少二氧化碳的排放。6、普及环保与垃圾的知识",
              "往大了说，垃圾分类是一项事关国计民生的重要工程，往小了说，垃圾分类事关每个人的卫生健康和生存发展。",
              "生活垃圾分类收集容器指按照厨余垃圾、可回收物、有害垃圾和其他垃圾进行“四分类”而投放的“四色桶”。",
              "垃圾是我们生活中通过各项活动生产出来的，我们不会忘记把垃圾扔到垃圾桶的习惯，但是各种参差不齐的垃圾放在了一起，导致了环境的污染。"]
    let tot = video.length;
    let vI = ["cloud://sorting-88tzu.736f-sorting-88tzu-1301418393/视频5.jpg",
              "cloud://sorting-88tzu.736f-sorting-88tzu-1301418393/视频1.jpg",
              "cloud://sorting-88tzu.736f-sorting-88tzu-1301418393/视频2.png",
              "cloud://sorting-88tzu.736f-sorting-88tzu-1301418393/视频3.jpg",
              "cloud://sorting-88tzu.736f-sorting-88tzu-1301418393/视频4.jpg"];
    let more = [];
    let m=0;
    for(let i=0; i<tot; i++){
      if(i!=ind){
        more[m]=i;
        m+=1;
      }
    }
    this.setData({
      videoList: video,
      authList: auth,
      datList: dat,
      sourList: sour,
      titList: tit,
      total: tot,
      index: ind,
      detList: det,
      videoImg: vI,
      moreInd: more
    })
  },

  tab:function(e){
    wx.redirectTo({
      url: '../jump/jump?id=' + e.currentTarget.dataset.id,
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