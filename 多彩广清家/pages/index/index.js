//index.js
//获取应用实例
var app = getApp()
Page({
  
  data: {
    avatarUrl: '',
    chengjiu:'../../images/chengjiu.png',
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
/*
* 生命周期函数--监听页面加载
*
*/
onLoad:function(){  

},
tzcard:function(){
  wx.navigateTo({
    url:'../../detail/card/card'
  })
},
tzchallenge: function () {
    wx.navigateTo({
      url: '../../detail/challenge/challenge'
    })
  },
tzrank: function () {
  wx.navigateTo({
    url: '../../detail/rank/rank'
  })
},
 tzintegral: function () {
  wx.navigateTo({
    url: '../../detail/integral/integral'
  })
}



})
