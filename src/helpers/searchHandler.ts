import { TextMessage } from '@line/bot-sdk'

export function searchByLaborCost(cost: number): TextMessage {
  return {
    type: 'text',
    text: `您輸入的代扣金額 \$${cost}，查詢結果為:\n等待 MySQL 查詢。`
  }
}

export function searchByRetireFund(cost: number): TextMessage {
  return {
    type: 'text',
    text: `您輸入的提撥金額 \$${cost}，查詢結果為:\n等待 MySQL 查詢。`
  }
}
