//index.js
//获取应用实例
var app = getApp()

Page({

  data: {
    avatarUrl:'',

    imgUrls: [
      {
        link: '/pages/index/index',
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      }, {
        link: '/pages/index/index',
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
      }, {
        link: '/pages/index/index',
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      }
    ],  
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    userInfo: {}  
  },












  //事件处理函数
  cd: function() {
    var that=this
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var avatarUrl = userInfo.avatarUrl
        that.setData({
          avatarUrl: avatarUrl
        })
      
      }
    })
    console.logo(app.wxdata.a);
  },

})
