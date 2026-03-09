// 美团外卖红包配置文件
// 自动生成时间：2026/3/9 17:19:03

const siteConfig = {
  "siteTitle": "美团外卖红包",
  "bgColor": "#FFD700",
  "redirectBaseUrl": "",
  "header": {
    "enabled": true,
    "logoUrl": "",
    "text": "美团",
    "textColor": "#FF6B00",
    "fontSize": "24px",
    "fontWeight": "bold",
    "align": "center",
    "logoPosition": "left",
    "logoSize": "40px"
  },
  "carousel": [
    {
      "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop",
      "title": "品质外卖",
      "subtitle": "精选商家5折起",
      "link": "https://meituan.com"
    },
    {
      "image": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop",
      "title": "超值优惠",
      "subtitle": "新人专享大礼包",
      "link": "https://meituan.com"
    }
  ],
  "stepsType": "text",
  "stepsText": "先领券 → 再下单 → 享优惠",
  "stepsColor": "#FF6B00",
  "mainButton": {
    "text": "领 外卖①",
    "color": "linear-gradient(135deg, #FF6B00, #FF9800)",
    "textColor": "#FFFFFF",
    "linkType": "normal",
    "link": "https://meituan.com",
    "mpLink": "",
    "mpTitle": "",
    "mpSubtitle": ""
  },
  "subButtonsEnabled": true,
  "subButtons": {
    "button1": {
      "text": "品质会场(新)",
      "desc": "精选商家5折起",
      "linkType": "normal",
      "link": "https://meituan.com",
      "mpLink": "",
      "mpTitle": "",
      "mpSubtitle": ""
    },
    "button2": {
      "text": "超 券包",
      "desc": "多张 券组合",
      "linkType": "normal",
      "link": "https://meituan.com",
      "mpLink": "",
      "mpTitle": "",
      "mpSubtitle": ""
    }
  },
  "imageButtonsEnabled": true,
  "imageButtons": [
    {
      "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop",
      "text": " 领取",
      "linkType": "normal",
      "link": "https://meituan.com",
      "mpLink": "",
      "mpTitle": "",
      "mpSubtitle": ""
    },
    {
      "image": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&auto=format&fit=crop",
      "text": "免费  领 ",
      "linkType": "normal",
      "link": "https://meituan.com",
      "mpLink": "",
      "mpTitle": "",
      "mpSubtitle": ""
    },
    {
      "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop",
      "text": "免 取",
      "linkType": "normal",
      "link": "https://meituan.com",
      "mpLink": "",
      "mpTitle": "",
      "mpSubtitle": ""
    }
  ],
  "tips": [
    "1. 先领完上方所有的券，领完后返回此页面，点击对应按钮即可使用券。",
    "2. 收货人手机 ",
    "4. 优惠券有效期以领取时显示为准。"
  ],
  "stepsImage": ""
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
}