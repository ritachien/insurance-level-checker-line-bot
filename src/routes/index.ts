// Import all dependencies, mostly using destructuring for better view.
import { Application, Request, Response } from 'express'
import { middleware, MiddlewareConfig, WebhookEvent } from '@line/bot-sdk'

import eventHandler from '../helpers/eventHandler'

const middlewareConfig: MiddlewareConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET || '',
}

async function routes(app: Application) {
  app
    // This route is used to receive connection tests.
    .get(
      '/',
      async (_: Request, res: Response): Promise<Response> => {
        return res.status(200).json({
          status: 'success',
          message: 'Connected successfully!',
        })
      }
    )

    // This route is used for the Webhook.
    .post(
      '/webhook',
      middleware(middlewareConfig),
      async (req: Request, res: Response): Promise<Response> => {
        const events: WebhookEvent[] = req.body.events

        // Process all of the received events asynchronously.
        const results = await Promise.all(
          events.map(async (event: WebhookEvent) => {
            try {
              await eventHandler(event)
            } catch (err: unknown) {
              if (err instanceof Error) {
                console.error(err)
              }

              // Return an error message.
              return res.status(500).json({
                status: 'error',
              })
            }
          })
        )

        // Return a successfull message.
        return res.status(200).json({
          status: 'success',
          results,
        })
      }
    )

}


export default routes
