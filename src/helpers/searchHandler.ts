import { TextMessage } from '@line/bot-sdk'
import { healthLevels } from '../config/levels.config'
import { HealthLevel } from '../database/models/healthLevel.model'
import { LaborLevel } from '../database/models/laborLevel.model'
import { RetireFundLevel } from '../database/models/retireFundLevel.model'
import binarySearch from '../utils/binarySearch'

export async function searchByLaborCost(cost: number): Promise<TextMessage> {
  const result = await LaborLevel.findOne({ where: { cost } })
  let reply

  if (!result) {
    reply = `您輸入的代扣金額 \$${cost} 查無結果，請確認後重新查詢，或輸入「說明」查看詳細查詢資訊。`
  } else {
    reply = `您輸入的代扣金額 \$${cost}，查詢結果為:\n👉 勞保薪資級距 \$${result.level}。`
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
    reply = `您輸入的提撥金額 \$${funds}，查詢結果為:\n👉 新制提撥級距 \$${result.level}。`
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
    reply = `您輸入的代扣金額 \$${cost}，查詢結果為:\n👉 健保薪資級距 \$${result.level}。\n\n`
  }

  return {
    type: 'text',
    text: reply
  }
}

export async function searchBySalary(salary: number): Promise<TextMessage> {
  // use binary search to find insurance level
  const salaryLevel = binarySearch(healthLevels, salary)

  // Find All data of related levels
  const result = await HealthLevel.findOne({
    where: { level: salaryLevel },
    include: [LaborLevel, RetireFundLevel],
    raw: true,
    nest: true
  })

  let reply
  if (!result) {
    reply = `您輸入的薪資 \$${salary} 查無結果，請確認後重新查詢，或輸入「說明」查看詳細查詢資訊。`
  } else {
    reply = `您輸入的薪資 \$${salary}，查詢結果為:\n👉 【健保】級距 \$${result.level}，代扣金額 \$${result.cost}/名。\n👉 【勞保】級距 \$${result.LaborLevel.level}，代扣金額 \$${result.LaborLevel.cost}。\n👉 【新制退休金】級距 \$${result.RetireFundLevel.level}，代扣金額 \$${result.RetireFundLevel.funds}。\n
    `
  }

  return {
    type: 'text',
    text: reply
  }
}
