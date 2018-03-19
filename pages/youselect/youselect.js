
Page({
  data: {},
  submitSelect:function(r){
    console.log(r)
    var that = this;
    var formdata = that.data;
    wx.getUserInfo({
      withCredentials:true,
      success: function (res) {
        wx.request({
          url: 'http://localhost:8000/', //仅为示例，并非真实的接口地址
          data: {
            userInfo: res.userInfo,
            y: formdata
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            console.log(res.data)
          }
        })
      },
      complete: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log(res)
      },
    })



  },

  radioChange:function(e){
    this.data.country = e.detail.value
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var items = this.data.items;
    for (var i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value == e.detail.value
    }
    // this.setData({
    //   items: items
    // });
  },

  onLoad: function () {

    var data = {
      items: [
        { value: 'USA', name: '两天一晚' },
        { value: 'CHN', name: '一天一晚', checked: 'true' },
      ]};

    this.data.country = data.items.filter(function(e){ 
      return e.checked =='true' 
      })[0].value
    this.setData(data)
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(log => {
    //     return util.formatTime(new Date(log))
    //   })
    // })
  }
})
