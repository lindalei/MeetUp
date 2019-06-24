import * as util from './util'

const isProd = true;
const baseUrl = isProd ? 'https://a-life.club' : 'https://localhost';

const paths = {
  serviceRequest: '/postServiceRequest'
}

export function sendServiceRequest(serviceData) {
  wx.request({
    url: baseUrl + paths.serviceRequest,
    data: serviceData,
    method: 'POST',
    header: {
      'content-type': "application/json"
    },
    success: function(res) {
      if(res.data === 'received') [
        util.showRequestReceived()
      ]
    },
    fail: function(err) {
      console.log(err)
    }
  })
}