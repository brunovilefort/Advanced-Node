import './config/module-alias'
import { env } from './config/env'
import { app } from './config/app'
import { config } from '@/infra/postgres/helpers'

import 'reflect-metadata'
import { createConnection } from 'typeorm'

createConnection(config)
  .then(() => app.listen(env.port, () => console.log(`🏃 Server running at http://localhost:${env.port}.`)))
  .catch(console.error)
