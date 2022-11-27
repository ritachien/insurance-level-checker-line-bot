import { TextMessage } from "@line/bot-sdk"
import { LaborLevel } from "../database/models/LaborLevel"

export async function searchByLaborCost(cost: number): Promise<TextMessage> {
  const result = await LaborLevel.findOne({ where: { cost } })
  let reply

  if (!result) {
    reply = `您輸入的代扣金額 \$${cost} 查無結果，請確認後重新查詢。`
  } else {
    reply = `您輸入的提撥金額 \$${cost}，查詢結果為: 勞保薪資級距 \$${result.level}。`
  }

  return {
    type: "text",
    text: reply
  }
}

export function searchByRetireFund(cost: number): TextMessage {
  return {
    type: "text",
    text: `您輸入的提撥金額 \$${cost}，查詢結果為:\n等待 MySQL 查詢。`
  }
}
