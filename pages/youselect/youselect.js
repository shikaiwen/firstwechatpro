
Page({
  data: {},

  onLoad: function () {


    var data = {
      items: [
        { value: 'USA', name: '美国' },
        { value: 'CHN', name: '中国', checked: 'true' },
        { value: 'BRA', name: '巴西' },
        { value: 'JPN', name: '日本' },
        { value: 'ENG', name: '英国' },
        { value: 'FRA', name: '法国' },
      ]}

    this.setData(data)
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(log => {
    //     return util.formatTime(new Date(log))
    //   })
    // })
  }
})
