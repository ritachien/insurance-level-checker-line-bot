import { createServer } from 'http'
import { app } from './app'
import { sequelize } from './config/sequelize.config'
import { logger } from './utils/logger'


const port = process.env.PORT || 3000

const start = async (): Promise<void> => {
  try {
    await sequelize.sync()
    logger.info('All models were synchronized successfully.')

    createServer(app).listen(port, () => {
      logger.info(`Server running on port ${port}`)
    })
  } catch (error) {
    logger.error(error)
    process.exit(1)
  }
}

start()
