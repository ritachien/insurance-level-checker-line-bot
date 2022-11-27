import * as dotenv from "dotenv"
dotenv.config()

import express, { Application } from "express"
import routes from "./routes"

export const app: Application = express()

routes(app)


