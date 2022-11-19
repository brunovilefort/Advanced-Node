import { AuthenticationMiddleware } from '@/application/middlewares'
import { makeJwtTokenGenerator } from '@/main/factories'

export const makeAuthenticationMiddleware = (): AuthenticationMiddleware => {
  const jwt = makeJwtTokenGenerator()
  return new AuthenticationMiddleware(jwt.validateToken.bind(jwt))
}
