import { env } from '@/main/config/env'

import { ConnectionOptions } from 'typeorm'

export const config: ConnectionOptions = {
  type: 'postgres',
  port: 5433,
  host: env.postgres.host,
  username: env.postgres.username,
  password: env.postgres.password,
  database: env.postgres.database,
  entities: ['dist/infra/postgres/entities/index.js']
}
