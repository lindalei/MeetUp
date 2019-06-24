// pages/service-type/service-price.js
import * as myNav from '../../utils/my-nav.js'
import * as price from '../../utils/price-list.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prices: [],
    displaySubMenu: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({serviceType: options.serviceType })
    this.setData({ prices: price.getPriceList(this.data.serviceType)})
  },

  checkboxChange: function (e) {
    this.setData({ serviceChecked: e.detail.value })
  },

   formSubmit: function (e) {
     const { serviceType, serviceChecked } = this.data
     myNav.goToServiceRequestWithTypeAndProject( serviceType, serviceChecked)
  }, 
   
  displaySubMenu: function (e) {
     let index = parseInt(e.currentTarget.dataset.index)
     let displayToggle = this.data.displaySubMenu
     
     if (displayToggle[index] === undefined) {
       displayToggle[index] = true
       this.setData({ displaySubMenu: displayToggle })
     }
     else if (displayToggle[index] === true) {
        displayToggle[index] = false
        this.setData({displaySubMenu: displayToggle} )
      }else  {
        displayToggle[index] = true
        this.setData({ displaySubMenu: displayToggle })
      }
     }
  
})