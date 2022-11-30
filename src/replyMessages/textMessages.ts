import { TextMessage } from '@line/bot-sdk'


export const joinMessage: TextMessage = {
  type: 'text',
  text: '👋 歡迎使用「老闆幫我保多少」查詢服務，請點選下方選單查看指令說明。'
}

export const commandRemider: TextMessage = {
  type: 'text',
  text: '👉 請輸入正確格式指令進行查詢，或輸入「說明」開啟指令說明清單。'
}
