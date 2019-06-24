// pages/service-request/service-request.js
import * as ct from '../../utils/constants'
import { sendServiceRequest } from '../../utils/api-actions'
import * as util from '../../utils/util'
import { navToServiceTypePage } from '../../utils/my-nav'

Page({
  data: {
    show_our_contact: false,
    contact: '',
    project: '',
    service_descp_placeholder: '请填写具体需求'
  },
  onLoad: function (options) {   
    let descpPH = null
    let contact = null
    const service_type = options[ct.NAV_PARAMS.SER_TYPE]
    switch (service_type) {
      case ct.SERVICE_TYPE.CLEAN:
       descpPH = '请填写具体要保洁的情况'
       contact = 'bealiveforever'
       break
      case ct.SERVICE_TYPE.CONSTRUCT:
        descpPH = '请填写具体要装修的情况'
        contact = 'alinuncle'
        break
      case ct.SERVICE_TYPE.MAINTAIN:
        descpPH = '请填写具体要维修的情况'
        contact = 'alinuncle'
        break
      default:
        descpPH = '请填写具体需求'
    }
    this.setData({service_descp_placeholder: descpPH})
    this.setData({service_type})
    this.setData({ contact })
    const service_sub_type = options.project === 'undefined' ? '自定义服务内容' : options.project
    this.setData({ service_sub_type })
  },
  formSubmit: function (e) {
    let that = this
    const { service_addr, service_contact_mobile, service_contact_wechat, service_descp, service_type, service_sub_type } = this.data
    if (!service_addr || (!service_contact_mobile && !service_contact_wechat) || !service_descp) {
      util.alertIncompleteRequest({ service_addr, service_contact_mobile, service_contact_wechat, service_descp})
      return
    }

    const reqData = {
      service_timestamp: util.formatTime(new Date()),
      service_type,
      service_sub_type,
      service_addr,
      service_contact_mobile,
      service_contact_wechat,
      service_descp      
    }
    sendServiceRequest(reqData)
    that.showModal()
  },

  showModal: function () {
    let that = this
    wx.showModal({
      title: '创建成功',
      content: '您已成功创建服务请求，如时间紧迫，请联系微信：' + that.data.contact,
      confirmText: '继续下单',
      cancelText: '编辑订单',
      success: function (res) {
        if (res.confirm) {
          navToServiceTypePage()
        } else if (res.cancel) {       
        }
      }
    })
  },
  setServiceAddr: function (e) {
    this.setData({service_addr: e.detail.value})
  },
  setServiceContactMobile: function (e) {
    this.setData({service_contact_mobile: e.detail.value})
  },
  setServiceContactWechat: function (e) {
    this.setData({ service_contact_wechat: e.detail.value })
  },
  setServiceDescp: function (e) {
    this.setData({service_descp: e.detail.value})
  }
})