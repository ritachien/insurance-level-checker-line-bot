import { sequelize } from '../../config/sequelize.config'
import { logger } from '../../utils/logger'

// import models
import { LaborLevel } from '../models/laborLevel'
import { RetireFundLevel } from '../models/retireFundLevel'
import { HealthLevel } from '../models/healthLevel'

// import seeds
import {
  laborlevels,
  retireFundLevels,
  healthLevels,
  laborSettings,
  healthSetting,
  retireFundSettings
} from '../../config/levels.config'

// start create levels
(async function createAllTables() {
  try {
    // connect to database & drop old tables
    await sequelize.sync({ force: true })

    // create new data
    await Promise.all([
      createLaborLevels(laborlevels),
      createLRetireFundLevels(retireFundLevels),
      createHealthLevels(healthLevels)
    ])
  } catch (err) {
    logger.error(err)
  }
})()



// function of seeders
async function createHealthLevels(levels: number[]) {
  try {
    levels.map(async level => {
      let laborLevel, retireFundLevel

      level > laborSettings.highestLevel
        ? laborLevel = laborSettings.highestLevel
        : laborLevel = level

      level > retireFundSettings.highestLevel
        ? retireFundLevel = retireFundSettings.highestLevel
        : retireFundLevel = level

      await HealthLevel.create({
        level,
        laborLevel,
        retireFundLevel,
        cost: Math.round(level * healthSetting.insuranceRate * healthSetting.costRate)
      })
    })
    logger.info('healthLevelsdata created!')
  } catch (err) {
    logger.error(err)
  }
}

async function createLaborLevels(levels: number[]) {
  try {
    await Promise.all(
      levels.map(async level => {
        await LaborLevel.create({
          level,
          cost: Math.round(level * laborSettings.accidentRate * laborSettings.costRate) + Math.round(level * laborSettings.jobRate * laborSettings.costRate)
        })
      })
    )
    logger.info('laborlevelsdata created!')
  } catch (err) {
    logger.error(err)
  }
}

async function createLRetireFundLevels(levels: number[]) {
  try {
    await Promise.all(
      levels.map(async level => {
        await RetireFundLevel.create({
          level,
          funds: Math.round(level * retireFundSettings.defaultRate)
        })
      })
    )
    logger.info('RetireFundLevelsdata created!')
  } catch (err) {
    logger.error(err)
  }
}

