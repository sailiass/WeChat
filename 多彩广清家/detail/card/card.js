// detail/card/card.js
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '',
    chengjiu: '../../images/chengjiu.png',
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
    avatar: '/images/1.jpg',
    imgSrc: '/images/ad1.jpg',
    content: '备注：*************',


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var avatarUrl = userInfo.avatarUrl
        that.setData({
          avatarUrl: avatarUrl
        })

      }
    })
  },

  tzone: function () {
    wx.navigateTo({
      url: '../../detail/card/card/activityone/activity'
    })
  },
  tztwo: function () {
    wx.navigateTo({
      url: '../../detail/card/card/activitytwo/activity'
    })
  },
  tzthree:function(){
    wx.navigateTo({
      url: '../../detail/card/card/activitythree/activity'
    })
  }


})