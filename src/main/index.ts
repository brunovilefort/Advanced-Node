import './config/module-alias'
import { env } from './config/env'
import { PgConnection } from '../infra/postgres/helpers/connection'

import 'reflect-metadata'

PgConnection.getInstance().connect()
  .then(async () => {
    const { app } = await import('./config/app')
    app.listen(env.port, () => console.log(`🏃 Server running at http://localhost:${env.port}.`))
  })
  .catch(console.error)
