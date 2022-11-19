import { AuthenticationMiddleware } from '@/application/middlewares'
import { setupAuthorize } from '@/domain/use-cases'
import { makeJwtTokenGenerator } from '@/main/factories'

export const makeAuthenticationMiddleware = (): AuthenticationMiddleware => {
  const authorize = setupAuthorize(makeJwtTokenGenerator())
  return new AuthenticationMiddleware(authorize)
}