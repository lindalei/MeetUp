export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export function alertIncompleteRequest(serviceData) {
  if(!serviceData.service_addr){
    showTextOnlyToast('请填写地址')
    return
  }
  if (!serviceData.service_contact_mobile && !serviceData.service_contact_wechat ){
    showTextOnlyToast('手机号码和微信ID不能同时为空，请全部填写或填写任何一种')
    return
  }
  if(!serviceData.service_descp){
    showTextOnlyToast('请填写服务需求描述')
    return
  }
}

function showTextOnlyToast(msg) {
  wx.showToast({
    title: msg,
    icon: 'none',
    duration: 1000
  })
}

export function showRequestReceived() {
  wx.showToast({
    title: '服务要求已发送',
    icon: 'success',
    duration: 1000
  })
}