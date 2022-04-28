// 云函数入口文件
const cloud = require('Wx-server-sdk')
const jsencrypt = require('JSEncrypt')
cloud.init()

//循环加密长字符串
const Encrypt_Long = function (key, str) {
  //设置加密函数的公钥
  var encrypt = new jsencrypt()
  encrypt.setPublicKey(key)
  var strlength = str.length
  //加密结果数组
  var encrypt_array = []
  //分段标志位
  var str_number = 0
  //循环加密前n-1段
  for (i = 0; i < (strlength / 100) - 1; i++) {
    var str_consist = str.substring(i * 100, (i + 1) * 100)
    encrypt_array[i] = encrypt.encrypt(str_consist)
    str_number = i
  }
  //加密最后一段
  encrypt_array[i] = encrypt.encrypt(str.substring(i * 100))
  return encrypt_array
}
//生成对称式加密私钥
const Create_Aes = function (length = 16) {
  let random = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let str = ''
  for (let i = 0; i < length; i++) {
    str = str + random.charAt(Math.random() * random.length)
  }
  return str
}
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  //创建服务器密钥对
  var key = new jsencrypt()
  var c = key.getPublicKey()
  var d = key.getPrivateKey()
  //用用户公钥加密服务器私钥
  var ad = Encrypt_Long(event.aa, d)
  //创建对称式加密密钥
  var e = Create_Aes()
  //保存对称式加密密钥

  //用服务器公钥加密对称式加密密钥
  var q = new jsencrypt()
  q.setPublicKey(c)
  var ce = q.encrypt(e)
  console.log(e)
  return {
    //发送 用用户公钥加密的服务器私钥
    ad,
    //发送 用服务器公钥加密的对称式加密密钥
    ce
  }
}