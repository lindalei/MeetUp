// SERVICE_TYPE need to be consistant with backend, don't change unless you'll update the backend
export const SERVICE_TYPE = {
  CLEAN: 'clean',
  MAINTAIN: 'maintain',
  CONSTRUCT: 'construct',
  HOSTING: 'hosting'
}

export const NAV_PARAMS = {
  SER_TYPE: 'serviceType',
  PROJECT: 'project'
}

export const hostingMessage = {
  title: '房屋托管',
  messages: [
    'A.live 为民宿房东提供完整的房屋托管服务，包括房屋装修、部件维修、房屋保洁和线上运营等。您也可以把无暇打理的房子交给我们全权代管运营。',
    '详情请联系微信／电话：17321366716'
  ]
}

export const constructMessage = {
  title: '装修',
  messages: [
    'A.live 旗下拥有拥有东方卫视《生活改造家》《暖暖的新家》设计师，空间设计者。',
    '拥有3个资深装修团队，已承接十余套民宿设计装修业务。我们以规范的服务、精心的设计、合理的预算、严格的选材、文明的施工服务每一位民宿房东。',
    '详情请联系微信／电话：17301770391'
  ],
  imageObj: {
    source: '/images/',
    amount: 7,
    subfix: '.jpeg'
  }
}