// pages/service-type/service-type.js
import * as myNav from '../../utils/my-nav.js'
import * as constants from '../../utils/constants.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    displayRepairSubMenu: false,
    region: ['上海市', '上海市', '浦东新区'],
    birth: "1990-01-01"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  goToServiceRequestWithTypeClean: function (e) {
    myNav.goToServicePriceWithType(constants.SERVICE_TYPE.CLEAN)
  },
  goToServiceRequestWithTypeMaintain: function (e) {
    myNav.goToServicePriceWithType(constants.SERVICE_TYPE.MAINTAIN)
    
  },
  goToConstructService: function (e) {
    myNav.goToMessagePage(constants.constructMessage)
  },
  goToHostingService: function (e) {
    myNav.goToMessagePage(constants.hostingMessage)
  },
  bindRegionChange: function (e) {  // picker值发生改变都会触发该方法
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
})