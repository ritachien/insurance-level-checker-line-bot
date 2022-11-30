import { FlexContainer, FlexMessage, FlexBox, FlexImage } from '@line/bot-sdk'

// menu image on the top
const menuImage: FlexImage = {
  type: 'image',
  url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
  size: 'full',
  aspectRatio: '20:13',
  aspectMode: 'cover'
}

// Menu description
const menuDescription: FlexBox = {
  type: 'box',
  layout: 'vertical',
  contents: [
    {
      type: 'text',
      text: '老闆幫我保多少?',
      weight: 'bold',
      size: 'xl'
    },
    {
      type: 'text',
      text: '歡迎使用查詢功能，請點選下方按鈕選擇查詢方式。',
      color: '#aaaaaa',
      wrap: true
    }
  ]
}

// Menu option buttons
const menuOptions: FlexBox = {
  type: 'box',
  layout: 'vertical',
  contents: [
    {
      type: 'button',
      style: 'link',
      height: 'sm',
      action: {
        type: 'postback',
        label: '1.用勞保代扣金額查詢',
        data: 'searchByLaborCost',
        displayText: '⭐︎ 目前僅提供本國人查詢。若您是外國人，會因代扣金額不同而查無資料(外國人無須繳納就業保險費)。\n\n👉 請輸入指令：「勞保代扣=金額」進行查詢!\n👉 範例: 勞保代扣=607'
      },
    },
    {
      type: 'button',
      style: 'link',
      height: 'sm',
      action: {
        type: 'postback',
        label: '2. 用勞退提撥金額(6%)查詢',
        data: 'searchByRetireFund',
        displayText: '⭐︎ 目前僅提供本國人查詢(外國人無須提撥新制退休金)。\n⭐︎ 預設提撥金額為薪資級距的 6%，若您有調整提撥費率，請自行換算至 6% 再進行查詢。\n\n👉 請輸入指令：「新制提撥=金額」進行查詢\n👉 範例: 新制提撥=6000'
      }
    },
    {
      type: 'button',
      style: 'link',
      height: 'sm',
      action: {
        type: 'postback',
        label: '3. 用健保代扣金額查詢',
        data: 'searchByHealthCost',
        displayText: '⭐︎ 本查詢服務用「單人」代扣金額查詢，若您有加保眷屬，請將實際代扣金額除以(計費眷屬 + 1)後再進行查詢。\n⭐︎ 各縣市針對特定身分(重大傷病/原住民/達一定年齡...)可能提供補助，目前僅針對一般狀況進行查詢。\n\n👉 請輸入指令：「健保代扣=金額」進行查詢!\n👉 範例: 健保代扣=540'
      }
    },
    {
      type: 'button',
      style: 'link',
      height: 'sm',
      action: {
        type: 'postback',
        label: '4. 用實際月薪資查詢所有資訊',
        data: 'searchBySalary',
        displayText: '⭐︎ 本查詢服務用「實際月薪資」查詢，查詢結果包含勞保/健保/新制提撥的各項級距、代扣/提撥金額。\n\n👉 請輸入指令：「薪資=金額」進行查詢\n👉 範例: 薪資=40000'
      }
    }
  ]
}

const flexMenu: FlexMessage = {
  type: 'flex',
  altText: 'A flex message Menu',
  contents: {
    type: 'bubble',
    hero: menuImage,
    body: menuDescription,
    footer: menuOptions
  }
}

export default flexMenu
