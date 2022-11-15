import './config/module-alias'
import { env } from './config/env'

import 'reflect-metadata'
import express from 'express'

const port = env.facebookApi.port

const app = express()

app.listen(port, () =>
  console.log(`🏃 Server running at http://localhost:${port}.`)
)
