import { FacebookAuthenticationUseCase } from '@/domain/use-cases'
import { makeFacebookApi, makePgUserAccountRepo, makeJwtTokenGenerator } from '@/main/factories'

export const makeFacebookAuthenticationUseCase = (): FacebookAuthenticationUseCase => {
  return new FacebookAuthenticationUseCase(
    makeFacebookApi(),
    makePgUserAccountRepo(),
    makeJwtTokenGenerator()
  )
}
