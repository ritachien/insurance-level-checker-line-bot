import { TextMessage } from '@line/bot-sdk'
import { HealthLevel } from '../database/models/healthLevel'
import { LaborLevel } from '../database/models/laborLevel'
import { RetireFundLevel } from '../database/models/retireFundLevel'

export async function searchByLaborCost(cost: number): Promise<TextMessage> {
  const result = await LaborLevel.findOne({ where: { cost } })
  let reply

  if (!result) {
    reply = `您輸入的代扣金額 \$${cost} 查無結果，請確認後重新查詢，或輸入「說明」查看詳細查詢資訊。`
  } else {
    reply = `您輸入的代扣金額 \$${cost}，查詢結果為: 勞保薪資級距 \$${result.level}。`
  }

  return {
    type: 'text',
    text: reply
  }
}

export async function searchByRetireFund(funds: number): Promise<TextMessage> {
  const result = await RetireFundLevel.findOne({ where: { funds } })
  let reply

  if (!result) {
    reply = `您輸入的提撥金額 \$${funds} 查無結果，請確認後重新查詢，或輸入「說明」查看詳細查詢資訊。`
  } else {
    reply = `您輸入的提撥金額 \$${funds}，查詢結果為: 新制提撥級距 \$${result.level}。`
  }

  return {
    type: 'text',
    text: reply
  }
}

export async function searchByHealthCost(cost: number): Promise<TextMessage> {
  const result = await HealthLevel.findOne({ where: { cost } })
  let reply

  if (!result) {
    reply = `您輸入的代扣金額 \$${cost} 查無結果，請確認後重新查詢，或輸入「說明」查看詳細查詢資訊。`
  } else {
    reply = `您輸入的代扣金額 \$${cost}，查詢結果為: 健保薪資級距 \$${result.level}。\n\n`
  }

  return {
    type: 'text',
    text: reply
  }
}
