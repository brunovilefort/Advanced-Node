import './config/module-alias'
import { env } from './config/env'

import 'reflect-metadata'
import { createConnection } from 'typeorm'

createConnection()
  .then(async () => {
    const { app } = await import('./config/app')
    app.listen(env.port, () => console.log(`🏃 Server running at http://localhost:${env.port}.`))
  })
  .catch(console.error)
