// pages/saveMessage/saveMessage.js
Page({

  /**
  * 页面的初始数据
  */
  data: {
    imgUrl: "",
    name: "",
    owe: "",
  },
  //图片上传
  upload: function () {
    let that = this;
    let ind = parseInt(that.data.index) + 1;
    // 让用户选择一张图片
    wx.chooseImage({
      success: chooseResult => {

        // 将图片上传至云存储空间
        wx.cloud.uploadFile({
          // 指定上传到的云路径
          cloudPath: new Date().getTime() + '.png',
          // 指定要上传的文件的小程序临时文件路径
          filePath: chooseResult.tempFilePaths[0],
          // 成功回调
          success: res => {
            console.log('上传成功', res)
            that.setData({
              imgUrl: res.fileID
            })
          },
        })
      },
    })
  },

  getn: function (e) {
    this.setData({
      name: e.detail.value
    });
  },

  geto: function (e) {
    this.setData({
      owe: e.detail.value
    });
  },

  up: function () {
    const db = wx.cloud.database();
    db.collection('classify').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        name: this.data.name,
        ans: this.data.owe,
        pic: this.data.imgUrl
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log('添加成功', res)
      },
      fail() {
        console.log('添加失败', res)
      }
    })
  }

})