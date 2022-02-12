// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  //初始化云端
  cloud.init({
    env: 'sorting-88tzu'
  })
  //获取数据库
  const db = cloud.database({
    env: 'sorting-88tzu'  
  });
  // 获取数据库中的某个组
  const targetDB = db.collection('classify');
  try{
    const promise = targetDB.doc("1583236465914_0.41059099351401973_33559289").get()
    return promise.then(res=>{
      return res.data.Msg;
    })
  }catch(e){
    console.error(e)
  }
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}