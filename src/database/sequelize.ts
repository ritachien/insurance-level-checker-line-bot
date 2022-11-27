import { Sequelize } from "sequelize-typescript"
import { LaborLevel } from "./models/LaborLevel"

export const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'insurance_levels',
  username: 'root',
  password: 'password',
  host: 'localhost',
  models: [LaborLevel]
})
