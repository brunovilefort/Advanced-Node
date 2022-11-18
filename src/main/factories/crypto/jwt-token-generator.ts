import { env } from '@/main/config'
import { JwtTokenHandler } from '@/infra/crypto'

export const makeJwtTokenGenerator = (): JwtTokenHandler => {
  return new JwtTokenHandler(env.jwtSecret)
}
