Page({
  /**
   * 页面的初始数据
   */
  data: {
      sort_direction: '../../icon/sort-right.png',
      list: [
          {
              number: '密码',
              value: ['a', 'b', 'c', 'd']
          },
          {
              number: 2,
              value: ['e', 'f', 'g']
          },
          {
              number: 3,
              value: ['h', 'i']
          },
          {
              number: 4,
              value: ['j', 'k']
          },
          {
              number: 5,
              value: ['l', 'm']
          }
      ],
      hit: false,
      hita: 'inline',
      aaa: 1,
      column_list:[
          {
              column_seqence:0,
              colume_name:'随笔',
              colume_note_list:[],
              colume_display:true
          }
      ]
      
  },

  a: function () {
      var curPages = getCurrentPages();
      if (curPages[curPages.length - 1].data.hita === 'inline') {
          this.setData({
              hita: 'none',
              sort_direction: '../../icon/sort-right.png'
          })
      }
      else {
          this.setData({
              hita: 'inline',
              sort_direction: '../../icon/sort-bottom.png'
          })
      }



      console.log(curPages[curPages.length - 1].data.hita)
      console.log(curPages)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      /*         var curPages =  getCurrentPages();
              console.log(curPages) */
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