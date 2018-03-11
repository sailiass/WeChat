// detail/card/card.js
Page({

  /**
   * 页面的初始数据
   */
 
  data: {
    appid: "wxfd5a16173a2f7ac8",
    session_key:'',
    openid:'',
    iv:'',
    step:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  t3rdSession:function(){
        var that=this;
        wx.login({
          success: function (res) {
            if (res.code) {
              //发起网络请求
              wx.request({
                url: 'http://plahui.top/index.php/wx/wx/index',
                data: {
                  code: res.code
                },
                success: function (res) {
                  var session_key = res.data.session_key;
                  var openid = res.data.openid;
                  that.setData({ openid: openid, session_key:session_key});
                    }
                  })
                } else { console.log('获取用户登录态失败！' + res.errMsg) } }});
        wx.getWeRunData({
          success(res) {
            const encryptedData = res.encryptedData
            const iv = res.iv
            that.setData({ encryptedData: encryptedData, iv: iv});
          }
        })
        wx.request({
          url: 'http://plahui.top/index.php/wx/get/decrypt',
          data: {
            encryptedData: that.data.encryptedData,
            iv: that.data.iv,
            session_key: that.data.session_key
            
          },
          
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function (res) {
            console.log('获取步数');
            var yundong = res.data.stepInfoList;
            that.setData({
              step: yundong[0].step
            })
            
            //console.log(yundong[0].step);
          }
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