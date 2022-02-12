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
    let ind = options.id;
    let video = ["cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1583226863689.mp4",
      "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1583227096566.mp4",
      "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1583227806300.mp4",
      "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1583227321890.mp4",
      "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1583227962398.mp4"];
    let auth = ["一点快讯", "生活吐槽家", "知识小能手", "记录生活事", "生活视线"];
    let dat = ["2019/10/06", "2019/12/27", "2019/09/05", "2019/12/12", "2019/12/12"];
    let sour = ["搜狗视频", "搜狗视频", "搜狗视频", "搜狗视频", "搜狗视频"];
    let tit = ["垃圾分类，人人参与", "垃圾分类的好处和意义", "为什么要学好垃圾分类", "生活垃圾分类收集容器标准", "垃圾分类，从现在开始"];
    let det = ["垃圾分类是指按一定规定或标准将垃圾分类储存、分类投放和分类搬运，从而转变成公共资源的一系列活动的总称。",
      "1、减少环境污染。2、节省土地资源。3、利用再生资源。4、提高民众价值观念。5、减少二氧化碳的排放。6、普及环保与垃圾的知识",
      "我国地大物博，但平均起来人均占用资源却很少，而我们却把“城市矿产”全部拿去填埋或焚烧，可以说用“我们的资源来污染我们的环境”，甚是可惜。",
      "为加强生活垃圾分类管理，促进生活垃圾源头减量、资源化利用和无害化处理，规范生活垃圾分类投放、分类收运和分类处置，以推进生态文明建设。",
      "垃圾分类就目前而言，是我们每个人要学习的内容。将这一环保观念传播给更多的人，从身边的朋友开始介绍垃圾分类的好处，让更多的人参与环保，环境将因为有我们的努力会越来越好。"]
    let tot = video.length;
    let vI = ["cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1590036183450.png",
      "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1590036170085.png",
      "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1590036132347.png",
      "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1590036114434.png",
      "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1590036082878.png"];
    let more = [];
    let m = 0;
    for (let i = 0; i < tot; i++) {
      if (i != ind) {
        more[m] = i;
        m += 1;
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

  tab: function (e) {
    wx.redirectTo({
      url: '../what/what?id=' + e.currentTarget.dataset.id,
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