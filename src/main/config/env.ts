export const env = {
  facebookApi: {
    clientId: process.env.FB_CLIENT_ID ?? '3262311390765568',
    clientSecret: process.env.FB_CLIENT_SECRET ?? '9a67fac4ad27e0b8f69a0148391dfad3',
    facebookToken: process.env.FB_TOKEN ?? 'EAAuXDgZBX4gABAPYNCw20eUXWe9fhKv598MY62L5Usxxg2XT8AyOv69itYlqCfcSO8IQBfOdZAWHpSSQVdsTZB4jV2cF5g2WJgytqahkOgNKSpGBvOvPvO4SmZB7c2KWNOCxrdG0ISwdhr1NmsV5K846BGgSvrp9mmVIZBN9VILbga19aliZC6wdvEWt9tfz1nxfn9nsKlq4sUh1f9VnI8'
  },
  port: process.env.PORT ?? '3333',
  jwtSecret: process.env.JWT_SECRET ?? 'pnweargwiaru'
}
