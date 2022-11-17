module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  entities: [
    `${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infra/postgres/entities/index.{js,ts}`
  ]
}
