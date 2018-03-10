//app.js
App({
  data:{

  },
  onLaunch: function () {
    wx.login({
      // 成功的回调函数
      success: function (res) {
       // console.log('code->' + res.code);
        console.log('调用结果->' + res.errMsg);
        if (res.code) {
          wx.request({
            url: 'http://plahui.top/index.php/index/Login/index',
            data: {
              code: res.code
            },
            success: function (res) {
              console.log('回调数据：');
              // console.log(res);
              console.log('用户唯一标识->' + res.data.openid);
              console.log('会话密钥->' + res.data.session_key);
              console.log('unionid->' + res.data.unionid);
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      },
      
    })
  
    
  
    //验证登录是否过期
    //check:function(){
    wx.checkSession({
      success: function (res) {
        //session 未过期，并且在本生命周期一直有效
        //console.log(res, '登录未过期');
        // wx.showToast({
        //   title: '登录未过期',
        // })
      },
      fail: function (res) {
        //登录态过期
        // wx.login() //重新登录
       // console.log(res, '过期');
        // wx.showModal({
        //   title: '提示',
        //   content: '你的登录信息过期，请重新登录！',
        // })
        wx.login({
          // 成功的回调函数
          success: function (res) {
           // console.log('code->' + res.code);
            console.log('调用结果->' + res.errMsg);
            if (res.code) {
              wx.request({
                url: 'http://plahui.top/index.php/wx/wx/index',
                data: {
                  code: res.code
                },
                success: function (res) {
                  console.log('回调数据：');
                  // console.log(res);
                  // console.log('用户唯一标识->' + res.data.openid);
                  // console.log('会话密钥->' + res.data.session_key);
                  // console.log('unionid->' + res.data.unionid);
                }
              })
            } else {
              console.log('获取用户登录态失败！' + res.errMsg)
            }
          }
        })
      }
    })

  }
})