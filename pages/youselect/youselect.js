
const openidkey = "issoh_openid";

function getopenId(){
    wx.setStorage(openidkey, openid);
}

Page({
  data: {},
  onShareAppMessage: function (options) {
    　　var that = this;
    　　var shareObj = {
      　　　　title: "转发的标题",
      // 　　　　path: '/pages/share/share',
      　　　　imgUrl: '', 
      　　　　success: function (res) {
        　　　　　　// 转发成功之后的回调
        　　　　　　if (res.errMsg == 'shareAppMessage:ok') {
        　　　　　　}
      　　　　},
      　　　　fail: function () {
        　　　　　　// 转发失败之后的回调
        　　　　　　if (res.errMsg == 'shareAppMessage:fail cancel') {
          　　　　　　　　// 用户取消转发
        　　　　　　} else if (res.errMsg == 'shareAppMessage:fail') {
          　　　　　　　　// 转发失败，其中 detail message 为详细失败信息
        　　　　　　}
          },complete: function(){

          }
      　　　　
  　　};
  　　// 来自页面内的按钮的转发
  　　if(options.from == 'button') {
    　　　　var eData = options.target.dataset;
    　　　　console.log(eData.name);     // shareBtn
    　　　　shareObj.path = '/pages/btnname/btnname?btn_name=' + eData.name;
  　　}
　　// 返回shareObj
　　return shareObj;
},
  submitSelect:function(r){
    console.log(r)
    var that = this;
    var formdata = that.data;

    // 什么敏感信息，根本是烂大街信息，http://www.wxappclub.com/topic/524
    // 转发获取群信息等 http://www.wxappclub.com/topic/1264

    wx.login({
      success: function (res) {
        if (res.code) {

          //发起网络请求
          wx.request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code
            },success:function(openid){
              wx.setStorage(openidkey, openid);
            }
          })


        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });

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

    var predata = {
      items: [
        { value: 'USA', name: '两天一晚' },
        { value: 'CHN', name: '一天一晚', checked: 'true' },
      ]};

    predata.country = predata.items.filter(function(e){ 
      return e.checked =='true' 
      })[0].value

    predata.submitBtnStatus = "";

    this.setData(predata)
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(log => {
    //     return util.formatTime(new Date(log))
    //   })
    // })
  }
})
