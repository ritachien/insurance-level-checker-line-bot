import { laborlevelSeeds } from "./seeds/laborLevelSeeds"
import { LaborLevel } from "./models/LaborLevel"
import { sequelize } from "./sequelize"
import { logger } from "../utils/logger"

// sequelize.sync().then(() => {
//   laborlevelSeeds.map(async (seed) => {
//     await LaborLevel.create({
//       level: seed,
//       cost: Math.round(seed * 0.115 * 0.2)
//     })
//   })

// })

async function createLaborLevelSeed(seeds: number[]) {
  try {
    await sequelize.sync({ force: true })
    await Promise.all(
      seeds.map(async (seed) => {
        await LaborLevel.create({
          level: seed,
          cost: Math.round(seed * 0.115 * 0.2)
        })
      })
    )
    logger.info("laborlevelSeeds created!")
    process.exit()
  } catch (err) {
    logger.error(err)
  }
}

createLaborLevelSeed(laborlevelSeeds)
