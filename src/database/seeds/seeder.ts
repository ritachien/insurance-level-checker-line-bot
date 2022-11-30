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
    await createHealthLevelSeeds(healthLevels)
    await Promise.all([
      createLaborLevelSeed(laborlevels),
      createLRetireFundSeeds(retireFundLevels)
    ])

    process.exit()
  } catch (err) {
    logger.error(err)
  }
})()



// function of seeders
async function createHealthLevelSeeds(levels: number[]) {
  try {
    healthLevels.map(async level => {
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

async function createLaborLevelSeed(levels: number[]) {
  try {
    await Promise.all(
      levels.map(async level => {
        await LaborLevel.create({
          level,
          cost: Math.round(level * laborSettings.accidentRate * laborSettings.costRate) + Math.round(level * laborSettings.jobRate * laborSettings.costRate),
          healthInsuranceLevel: level
        })
      })
    )
    logger.info('laborlevelsdata created!')
  } catch (err) {
    logger.error(err)
  }
}

async function createLRetireFundSeeds(levels: number[]) {
  try {
    await Promise.all(
      levels.map(async level => {
        await RetireFundLevel.create({
          level,
          funds: Math.round(level * retireFundSettings.defaultRate),
          healthInsuranceLevel: level
        })
      })
    )
    logger.info('RetireFundLevelsdata created!')
  } catch (err) {
    logger.error(err)
  }
}

