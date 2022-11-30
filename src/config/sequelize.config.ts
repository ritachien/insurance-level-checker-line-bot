import { Sequelize } from 'sequelize-typescript'
import { LaborLevel } from '../database/models/LaborLevel'
import * as dotenv from 'dotenv'
import { RetireFundLevel } from '../database/models/RetireFundLevel'
import { HealthLevel } from '../database/models/HealthLevel'

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
