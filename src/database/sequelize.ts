import { Sequelize } from "sequelize-typescript"
import { LaborLevel } from "./models/LaborLevel"
import * as dotenv from "dotenv"

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
  models: [LaborLevel]
})
