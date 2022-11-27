import { FlexContainer, FlexMessage, FlexBox, FlexImage } from "@line/bot-sdk"

// menu image on the top
const menuImage: FlexImage = {
  type: "image",
  url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
  size: "full",
  aspectRatio: "20:13",
  aspectMode: "cover"
}

// Menu description
const menuDescription: FlexBox = {
  type: "box",
  layout: "vertical",
  contents: [
    {
      type: "text",
      text: "老闆幫我保多少?",
      weight: "bold",
      size: "xl"
    },
    {
      type: "text",
      text: "歡迎使用查詢功能，請點選下方按鈕選擇查詢方式。",
      color: "#aaaaaa",
      wrap: true
    }
  ]
}

// Menu option buttons
const menuOptions: FlexBox = {
  type: "box",
  layout: "vertical",
  contents: [
    {
      type: "button",
      style: "link",
      height: "sm",
      action: {
        type: "postback",
        label: "1.用勞保代扣金額查詢",
        data: "searchByLaborCost",
        displayText: "請輸入指令：「勞保代扣=金額」進行查詢!\n範例: 勞保代扣=123"
      },
    },
    {
      type: "button",
      style: "link",
      height: "sm",
      action: {
        type: "postback",
        label: "2. 用勞退提撥金額(6%)查詢",
        data: "searchByRetireFund",
        displayText: "請輸入指令：「新制提撥=金額」進行查詢(預設為投保金額 6%)!\n範例: 新制提撥=6000"
      }
    }
  ]
}

const flexMenu: FlexMessage = {
  type: "flex",
  altText: "A flex message Menu",
  contents: {
    type: "bubble",
    hero: menuImage,
    body: menuDescription,
    footer: menuOptions
  }
}

export default flexMenu
