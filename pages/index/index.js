//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    cz_flag: false, // 控制点赞评论按钮
    cz_left: 0, // 点赞评论定位left
    cz_top: 80, // 点赞评论定位top
    dz_id: null, // 点赞评论ID
    animationData: {},
    tt: 1,
    kk: 'hidden',
    f: false
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onPullDownRefresh: function () {
    wx.showLoading({
    })
    setTimeout(function () {
      wx.stopPullDownRefresh();
      wx.hideLoading();
    }, 1000)
   
  },
  onReachBottom: function () {
    var that = this;
    that.setData({
      tt: 1
    })
    setTimeout(function () {
      that.setData({
        tt: 0,
        kk: 'visible'
      })
    }, 2000)
  },
  bindCaoZuo: function (e) {  //评论点赞
    var that = this
    var userId = app.userId
    var dz_id = e.currentTarget.dataset.id
    // 获取当前节点的偏移TOP值计算当前点赞操作的位置
    var offsetTop = Math.floor(e.currentTarget.offsetTop)
    // 赋值计算好的TOP值显示按钮
    that.setData({
      // dz_id: dz_id,
      cz_top: offsetTop,
      cz_flag: true
    })
    // 动画
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'linear',
      delay: 0,
    })

    // 0.3秒后滑动
    setTimeout(function () {
      animation.right(40).opacity(1).step()
      that.setData({
        animationData: animation.export()
      })
    }, 300)

    // 5秒后自动隐藏按钮
    var timeout = setTimeout(function () {
      animation.right(0).opacity(0).step()
      that.setData({
        animationData: animation.export()
      })
    }, 5000)
  },
  eeee:function(e) {
    this.setData({
      f: true
    })
  }
})