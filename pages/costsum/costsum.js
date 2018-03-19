http://blog.csdn.net/qq_35909852/article/details/78336193

Page({
  // data: {},
  mytab:function(event){
    console.log(event)
  },
  searchBox: function (e) {
    const that = this;
    let first, second;
    that.setData({
      first: e.detail.value.username,
      second: e.detail.value.pwd
    })
  },
  onLoad: function () {

    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        wx.navigateTo({
          url: '../youselect/youselect'
        })
      },
      complete:function(res){
        console.log(res)
      },
      fail	: function (res) {
        console.log(res)
      },
    })

    var data = {msg:"start pro"}

    this.setData(data)
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(log => {
    //     return util.formatTime(new Date(log))
    //   })
    // })
  }
})
