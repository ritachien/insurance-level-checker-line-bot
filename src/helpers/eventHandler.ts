// Get env variables
import * as dotenv from 'dotenv'
dotenv.config()

import { Client, ClientConfig, WebhookEvent, MessageAPIResponseBase } from '@line/bot-sdk'

import flexMenu from '../replyMessages/flexMenu'
import { commandRemider, joinMessage } from '../replyMessages/textMessages'
import { searchByLaborCost, searchByRetireFund } from './searchHandler'

// Setup all LINE client and Express configurations.
const clientConfig: ClientConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.CHANNEL_SECRET,
}

// Create a new LINE SDK client.
const client = new Client(clientConfig)

const eventHandler = async (event: WebhookEvent): Promise<MessageAPIResponseBase | undefined> => {
  // Handle events besides message & follow
  if (event.type !== 'message' && event.type !== 'follow') {
    return
  }

  const { replyToken } = event

  // Handle join event
  if (event.type === 'follow') {
    return await client.replyMessage(replyToken, [
      joinMessage,
      flexMenu
    ])
  }

  // Handle none-text message
  if (event.message.type !== 'text') {
    return await client.replyMessage(replyToken, commandRemider)
  }

  // Handle text message
  const { text } = event.message
  const command = text.split('=')
  if (command[0] === '說明') {
    return await client.replyMessage(
      replyToken,
      flexMenu
    )
  }

  if (command[0] === '勞保代扣') {
    return await client.replyMessage(
      replyToken,
      searchByLaborCost(Number(command[1]))
    )
  }

  if (command[0] === '新制提撥') {
    return await client.replyMessage(
      replyToken,
      searchByRetireFund(Number(command[1]))
    )
  }

  return await client.replyMessage(replyToken, commandRemider)
}

export default eventHandler