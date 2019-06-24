// pages/service-hosting/service-hosting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const messageObj = JSON.parse(options.messageObj)
    const { title, messages } = messageObj
    const images = []
    if (messageObj.imageObj) {
      const { source, amount, subfix } = messageObj.imageObj
      for (let i = 1; i <= amount; i++) {
        const imageSrc = `${source}${i}${subfix}`
        images.push(`${source}${i}${subfix}`)
      }
    }
    this.setData({
      title,
      messages,
      images
    })
  }
})