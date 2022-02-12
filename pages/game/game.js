// pages/game/game.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    flag: 0,
    right: 0,
    total: 10,
    answer: [],
    pic: [],
    nm: [],
    inst: [],
    ans: "",
    img: "",
    name: "",
    judge: "",
    instr: "",
    showed:1,
    checked:[]
  },

  opt: function (e) {
    var ind = parseInt(this.data.index);
    var data = e.currentTarget.dataset.text;
    var num = this.data.total;
    var ri = parseInt(this.data.right);
    if (num > 10) {
      num = 10;
    }
    if (data != "next") {
      this.setData({
        showed: 0
      })
      if (data == this.data.ans) {
        ri++;
        this.setData({
          judge: "恭喜你，答对了^0^",
          right: ri
        })
      } else {
        this.setData({
          judge: "很抱歉，答错了@_@"
        })
      }
      this.setData({
        flag: 1
      })
    } else {
      var that = this;
      let n;
      ind++;
      if (ind == num) {
        wx.redirectTo({
          url: '/pages/grade/grade?right=' + this.data.right + '&total=' + num,
        })
        return;
      }
      n = Math.floor(Math.random() * num);
      while (this.data.checked[n] == -1) {
        n = Math.floor(Math.random() * num);
      } console.log(n)
      if (this.data.checked[n] > 0) {
        this.data.checked[n] = -1;
      }
      that.setData({
        showed: 1,
        flag: 0,
        index: ind,
        img: this.data.pic[n],
        ans: this.data.answer[n],
        name: this.data.nm[n],
        instr: this.data.inst[n]
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let ans;
    let img;
    let nam;
    let instr;
    let tot = 0;
//         let tops = [
//           "cloud://sorting-88tzu.736f-sorting-88tzu-1301418393/1583221595317.png",
//           "cloud://sorting-88tzu.736f-sorting-88tzu-1301418393/1583222021306.png",
//           "cloud://sorting-88tzu.736f-sorting-88tzu-1301418393/1583222180633.png",
//           "cloud://sorting-88tzu.736f-sorting-88tzu-1301418393/1583222428559.png",
//           "cloud://sorting-88tzu.736f-sorting-88tzu-1301418393/1583222565336.png",
//           "cloud://sorting-88tzu.736f-sorting-88tzu-1301418393/1583222709166.png",
//           "cloud://sorting-88tzu.736f-sorting-88tzu-1301418393/1583222951869.png",
//           "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1583230648023.png",
//           "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1583230721560.png",
//           "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1583230792295.png",
//           "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1583230941067.png",
//           "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1583231074322.png",
//           "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1583231199165.png",
//           "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1583231327013.png",
//           "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1583231525799.png",
//           "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1583231594728.png",
//           "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1583231690910.png",
//           "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1583232015755.png",
//           "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1583283097694.png",
//           "cloud://sorting-xpn7k.736f-sorting-xpn7k-1301420238/1583230156061.png"
// ];
//         let answ = ["C", "B", "C", "C", "C",
//           "D", "C", "C", "B", "C","B","A","B","A","C","C","C","B","A","B"];
//         let names = ["茶包", "泡沫塑料", "袜子", "塑料袋", "旧皮衣",
//           "枯花", "围裙", "一次性塑料餐具", "照相机", "陶瓷盘", "香烟盒", "废发动机油",
//           "旧锅铲", "节能灯泡", "淡菜壳", "塑料拖鞋", "旧被子", "旧棉衣", "废空调清洗剂",
//           "塑料玩具"
// ];
//         let ins = ["是除有害垃圾、可回收垃圾、 湿垃圾以外的其他生活废弃物。",
//           "适宜回收利用和资源化利用，可循环使用。",
//           "受过污染、无二次利用价值的废旧衣物属于其他垃圾。",
//           "不宜再生利用的生活垃圾属于其他垃圾。",
//           "皮革类无法回收，属于其他垃圾。",
//           "枯花可自然降解，属于厨余垃圾。",
//           "受过污染、无二次利用价值的废旧衣服属于其他垃圾。",
//           "一次性用品不宜再生属于其他垃圾。",
//           "废电器电子产品请完整丢放，勿自行拆解。",
//           "陶瓷类物品不可回收，属于其他垃圾。",
//           "废纸张可回收加工后循环利用，属于可回收物",
//           "废矿物油及其包装物，属于有害垃圾，投放时宜保持其完整性，并轻投轻放",
//           "废金属可回收加工后循环利用，属于可回收物，投放时请轻投轻放",
//           "含贡废物，属于有害垃圾，投放时宜保持其完整性，并轻投轻放",
//           "贝壳、动物大骨等坚硬的食物残渣属于其他垃圾",
//           "不宜再生利用的生活用品属于其他垃圾",
//           "毛绒玩具、棉被等利用价值低，属于其他垃圾",
//           "废织物可回收加工后循环利用，属于可回收物",
//           "废油漆溶剂及其包装物，属于有害垃圾，投放时宜保持其完整性，并轻投轻放。",
//           "废塑料可回收加工后循环利用，属于可回收物"
// ];
        // for(let i=0; res.data[i]!=undefined; i++){
        //   answ[i] = res.data[i].ans;
        //   tops[i] = res.data[i].pic;
        //   names[i] = res.data[i].name;
        //   ins[i] = res.data[i].instr;
        //   tot++;
        // }

        // 连接云数据库
        const db = wx.cloud.database({
          env: 'sorting-88tzu'
        })
        db.collection('game').get({
          success:res => {
            console.log(res.data)
          }
        })

        let check = [];

        ins.forEach(function (i) {
          check.push(1)
        })
        check[0] = -1;
        ans = answ[0];
        img = tops[0];
        nam = names[0];
        instr = ins[0];
        that.setData({
          img: img,
          ans: ans,
          name: nam,
          instr: instr,
          answer: answ,
          pic: tops,
          nm: names,
          inst: ins,
          checked:check
        });
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