import { createServer } from 'http'
import { app } from './app'
import { sequelize } from './config/sequelize.config'
import { logger } from './utils/logger'

const port = process.env.PORT || 3000

const start = async (): Promise<void> => {
  try {
    await sequelize.authenticate()
    logger.info('Connection has been established successfully.')

    createServer(app).listen(port, () => {
      logger.info(`Server running on port ${port}`)
    })
  } catch (error) {
    logger.error('Unable to connect to the database:\n', error)
    process.exit(1)
  }
}

start()
