import './config/module-alias'
import { env } from './config/env'
import { app } from './config/app'

import 'reflect-metadata'

app.listen(env.port, () => console.log(`🏃 Server running at http://localhost:${env.port}.`))
