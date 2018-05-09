//my.js
Page({
  data: {
    nickName: "",
    avatarUrl: ""
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    wx.getUserInfo({
      success: function (res) {
        wx.showModal({
          title: '11',
          content: JSON.stringify(res),
        })
        that.setData({
          nickName: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl,
        })
      },
    })
  }
})