import { env } from '@/main/config'
import { JwtTokenHandler } from '@/infra/gateways'

export const makeJwtTokenGenerator = (): JwtTokenHandler => {
  return new JwtTokenHandler(env.jwtSecret)
}
