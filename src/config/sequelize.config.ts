import { Sequelize } from 'sequelize-typescript'
import * as dotenv from 'dotenv'
import { LaborLevel } from '../database/models/laborLevel.model'
import { RetireFundLevel } from '../database/models/retireFundLevel.model'
import { HealthLevel } from '../database/models/healthLevel.model'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

export const sequelize = new Sequelize({
  dialect: 'mysql',
  database: process.env.MYSQLDATABASE,
  username: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  host: process.env.MYSQLHOST,
  port: Number(process.env.MYSQLPORT),
  logging: false,
  models: [LaborLevel, RetireFundLevel, HealthLevel]
})
