import * as ct from './constants'
export function getPriceList(serviceType) {
  const CleanPriceList = []
  const MaintainPriceList = []
  const ConstructPriceList = []
  const unitA = "每个"
  const unitB = "每次"
  const unitC = "每小时"
  const unitD = "每台"
  const unitE = "每米"
  const unitF = "每套"
  const unitG = "每根"
  MaintainPriceList.push(
    {
      "type": "开锁",
      "detail": [
        {
          "subtype": "A级别",
          "price": "35",
          "unit": unitA
        },
        {
          "subtype": "B级别",
          "price": "90",
          "unit": unitA
        },
        {
          "subtype": "超B级别",
          "price": "110",
          "unit": unitA
        },
        {
          "subtype": "其他",
          "price": "面议"
        },
      ]
    },
    {
      "type": "电",
      "detail": [
        {
          "subtype": "电路检修",
          "price": "60",
          "unit": unitC
        }
      ]
    },
    {
      "type": "上下水",
      "detail": [
        {
          "subtype": "上水疏通",
          "price": "80",
          "unit": unitB
        },
        {
          "subtype": "下水疏通",
          "price": "100",
          "unit": unitB
        },
        
        {
          "subtype": "其他",
          "price": "面议"          
        },
      ]
    },
    {
      "type": "通马桶",
      "detail": [
        {
          "subtype": "手动/非拆卸",
          "price": "100",
          "unit": unitB
        },
        {
          "subtype": "手动/拆卸",
          "price": "120",
          "unit": unitB
        },
        {
          "subtype": "疏通机/非拆卸",
          "price": "160",
          "unit": unitB
        },
        {
          "subtype": "疏通机/拆卸",
          "price": "160",
          "unit": unitB
        },

        {
          "subtype": "其他",
          "price": "面议"
        },
      ]
    },
    {
      "type": "冰箱",
      "detail": [
        {
          "subtype": "密封条更换",
          "price": "40",
          "unit": unitA
        },
        {
          "subtype": "照明维修",
          "price": "40",
          "unit": unitA
        },
        {
          "subtype": "门口开关更换",
          "price": "40",
          "unit": unitA
        },
        {
          "subtype": "温度调节器更换",
          "price": "50",
          "unit": unitA
        },
        {
          "subtype": "压缩机更换",
          "price": "120",
          "unit": unitA
        },

        {
          "subtype": "其他",
          "price": "面议"
        },
      ]
    },
    {
      "type": "洗衣机",
      "detail": [
        {
          "subtype": "电容更换",
          "price": "40",
          "unit": unitA
        },
        {
          "subtype": "皮带更换",
          "price": "40",
          "unit": unitA
        },
        {
          "subtype": "延时安全锁更换",
          "price": "40",
          "unit": unitA
        },
        {
          "subtype": "密封圈更换",
          "price": "40",
          "unit": unitA
        },
        {
          "subtype": "进水阀更换",
          "price": "50",
          "unit": unitA
        },
        {
          "subtype": "进水阀更换",
          "price": "50",
          "unit": unitA
        },
        {
          "subtype": "排水电磁阀更换",
          "price": "50",
          "unit": unitA
        },
        {
          "subtype": "排水泵更换",
          "price": "70",
          "unit": unitA
        },
        {
          "subtype": "电机更换",
          "price": "100",
          "unit": unitA
        },
        {
          "subtype": "电脑板更换",
          "price": "100",
          "unit": unitA
        },

        {
          "subtype": "其他",
          "price": "面议"
        },
      ]
    },
    {
      "type": "空调",
      "detail": [
        {
          "subtype": "温度传感器更换",
          "price": "60",
          "unit": unitA
        },
        {
          "subtype": "电容更换",
          "price": "70",
          "unit": unitA
        },
        {
          "subtype": "铜管更换",
          "price": "70",
          "unit": unitE
        },
        {
          "subtype": "四通阀更换",
          "price": "90",
          "unit": unitA
        },
        {
          "subtype": "拆机（挂机）",
          "price": "110",
          "unit": unitD
        },
        {
          "subtype": "拆机（柜机）",
          "price": "120",
          "unit": unitD
        },
        {
          "subtype": "加氟（挂机）",
          "price": "190",
          "unit": unitD
        },
        {
          "subtype": "加氟（柜机）",
          "price": "230",
          "unit": unitD
        },
        {
          "subtype": "移机（挂机）",
          "price": "260",
          "unit": unitD
        },
        {
          "subtype": "移机（柜机）",
          "price": "290",
          "unit": unitD
        },
        {
          "subtype": "其他",
          "price": "面议"
        },
      ]
    },
    {
      "type": "电热水器",
      "detail": [
        {
          "subtype": "调温旋钮更换",
          "price": "60",
          "unit": unitA
        },
        {
          "subtype": "安全阀维修更换",
          "price": "60",
          "unit": unitA
        },
        {
          "subtype": "加热管更换",
          "price": "60",
          "unit": unitA
        },
        {
          "subtype": "镁棒更换",
          "price": "70",
          "unit": unitA
        },

        {
          "subtype": "其他",
          "price": "面议"
        },
      ]
    },
    {
      "type": "燃气热水",
      "detail": [
        {
          "subtype": "电磁阀更换",
          "price": "70",
          "unit": unitA
        },
        {
          "subtype": "水流量传感器更换",
          "price": "70",
          "unit": unitA
        },
        {
          "subtype": "温度传感器更换",
          "price": "70",
          "unit": unitA
        },
        {
          "subtype": "其他",
          "price": "面议"
        },
      ]
    },
    {
      "type": "油烟机",
      "detail": [
        {
          "subtype": "烟机装饰罩更换",
          "price": "70",
          "unit": unitF
        },
        {
          "subtype": "烟道管更换",
          "price": "80",
          "unit": unitG
        },
       
        {
          "subtype": "其他",
          "price": "面议"
        },
      ]
    },
  )
 
  ConstructPriceList.push(
    {
      "name": "刷墙",
      "price": "200"
    },
    {
      "name": "吊顶",
      "price": "500"
    }
  )

  CleanPriceList.push(
    {
      "type": "单独保洁",
      "detail": [
        {
          "subtype": "一居室（0-40平）",
          "price": "40"
        },
        {
          "subtype": "两居室（40-70平）",
          "price": "60"
        },
        {
          "subtype": "三居室（70-100平）",
          "price": "80"
        },
        {
          "subtype": "四居室（100-150平）",
          "price": "120"
        },
        {
          "subtype": "其他",
          "price": "面议"
        }
      ]
    },
    {
      "type": "布草带走洗涤",
      "detail": [
        {
          "subtype": "一套",
          "price": "10"
        }
      ]
    },
    {
      "type": "布草租赁加洗涤",
      "detail": [
        {
          "subtype": "一套",
          "price": "15"
        }
      ]
    }

  )

  if (serviceType ==ct.SERVICE_TYPE.CLEAN){
    return CleanPriceList
  }
  else if (serviceType == ct.SERVICE_TYPE.MAINTAIN){
   return MaintainPriceList
  }
  else if (serviceType == ct.SERVICE_TYPE.CONSTRUCT){
    return ConstructPriceList
  }
  
}