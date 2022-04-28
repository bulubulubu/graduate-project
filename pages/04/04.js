import Wxmprsa from 'wxmp-rsa'
Page({
    /**
     * 页面的初始数据
     */
    data: {

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //循环解密函数
        const Decrypt_Long = function (key, str) {
            var decrypt = new Wxmprsa()
            decrypt.setPrivateKey(key)
            var result = ''
            for (var i = 0; i < str.length; i++) {
                var result_consist = decrypt.decrypt(str[i])
                result = result + result_consist
            }
            return result
        }
        //创建用户密钥对
        const rsa = new Wxmprsa()
        const aa = rsa.getPublicKey()
        const bb = rsa.getPrivateKey()
        //发送用户的公钥
        wx.cloud.callFunction({
            name: 'encrypt_channel_create',
            data: {
                aa,
            },
            //接受服务器传来的数据
            success: function (res) {
                //用用户的私钥来解密得到服务器的私钥
                var d = Decrypt_Long(bb, res.result.ad)
                //用服务器的私钥来解密得到对称式加密密钥
                var rsa1 = new Wxmprsa()
                rsa1.setPrivateKey(d)
                var t = rsa1.decrypt(res.result.ce)
                console.log(t)
                //保存得到的密钥

            }, fail: console.error
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