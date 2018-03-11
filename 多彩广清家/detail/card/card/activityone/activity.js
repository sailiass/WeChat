// detail/card/card/activityone/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList:'',
    progressInfo: "",  
  },

subimg:function(){   
 var that=this;
  wx.chooseImage({   //主要是用来选择图片以及接收图片路径回调的监听
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      var tempFilePaths = res.tempFilePaths;
      console.log('添加图片：',res);
      that.setData({
        imageList: tempFilePaths,
      })
    }
  })
 
  },
// previewImage: function (e) {   //预览图片。
//   var current = e.target.dataset.src;
//   wx.previewImage({
//     current: current, // 当前显示图片的http链接  
//     urls: this.data.imageList // 需要预览的图片http链接列表  
//   })
// },
  formSubmit:function(e){   //表单提交
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log('form发生了submit事件，携带数据为：', this.data.imageList)

    wx.uploadFile({
      url: 'http://plahui.top/index.php/wx/wx/upload', //仅为示例，非真实的接口地址
      filePath: this.data.imageList[0],
    
      name: 'file',
      formData: {
        'user': e.detail.value.textarea
      },
      success: function (res) {
        var data = (res.data);
        console.log(res);
        console.log("已经执行成功回调函数");
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail(){
        wx.showToast({
          title: '提交失败',
          icon: 'none',
          duration: 3000
        })
      }
    })


    // const uploadTask = wx.uploadFile({
    //   url: 'http://plahui.top/index.php/wx/wx/upload', //仅为示例，非真实的接口地址
    //   filePath: this.data.imageList[0],
    //   name: 'file',
    //   formData: {
    //     'user': 'test'
    //   },
    //   success: function (res) {
    //     console.log(res);
    //     var data = res.data
    //     //do something
    //   }
    // })
    // uploadTask.onProgressUpdate((res) => {
    //   console.log('上传进度', res.progress)
    //   console.log('已经上传的数据长度', res.totalBytesSent)
    //   console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
    // })

  },


})