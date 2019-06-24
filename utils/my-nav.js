import { NAV_PARAMS} from './constants.js'
export function goToServiceRequestWithType(serviceType) {
  let serviceRequestUrl = '/pages/service-request/service-request'
  if(serviceType) {
    serviceRequestUrl = serviceRequestUrl + '?' + NAV_PARAMS.SER_TYPE + '=' + serviceType
  }
  wx.navigateTo({
    url: serviceRequestUrl
  })
}

export function goToServiceRequestWithTypeAndProject(serviceType, serviceChecked) {
  let serviceRequestUrl = '/pages/service-request/service-request'
  if (serviceType) {
    serviceRequestUrl = serviceRequestUrl + '?' + NAV_PARAMS.SER_TYPE + '=' + serviceType + '&' + NAV_PARAMS.PROJECT + '=' + serviceChecked
  }
  wx.navigateTo({
    url: serviceRequestUrl
  })
}

export function goToServicePriceWithType(serviceType) {
  let serviceRequestUrl = '/pages/price-list/price-list'
  if (serviceType) {
    serviceRequestUrl = serviceRequestUrl + '?' + NAV_PARAMS.SER_TYPE + '=' + serviceType
  }
  wx.navigateTo({
    url: serviceRequestUrl
  })
}

export function goToMessagePage(params) {
  if (!params) {
    return;
  }
  const messagePageUrl = `/pages/message-page/message-page?messageObj=${JSON.stringify(params)}`
  wx.navigateTo({
    url: messagePageUrl
  })
}

export function navToServiceTypePage() {
 // 微信小程序最多允许 10 层页面路径，当返回层数超过现有层数时，将返回到首页
  wx.navigateBack({
    delta: 20
  })
}



