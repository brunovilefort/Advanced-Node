import { LoadFacebookUserApi, TokenGenerator } from '@/domain/contracts/apis'
import { AuthenticationError } from '@/domain/entities/errors'
import { AccessToken, FacebookAccount } from '@/domain/entities'
import { LoadUserAccountRepository, SaveFacebookAccountRepository } from '@/domain/contracts/repos'

type Setup = (facebookApi: LoadFacebookUserApi, userAccountRepo: LoadUserAccountRepository & SaveFacebookAccountRepository, crypto: TokenGenerator) => FacebookAuthentication
export type FacebookAuthentication = (params: { token: string }) => Promise<AccessToken | AuthenticationError>

export const setupFacebookAuthentication: Setup = (facebookApi, userAccountRepo, crypto) => async params => {
  const fbData = await facebookApi.loadUser(params)
  if (fbData !== undefined) {
    const accounData = await userAccountRepo.load({ email: fbData.email })
    const fbAccount = new FacebookAccount(fbData, accounData)
    const { id } = await userAccountRepo.saveWithFacebook(fbAccount)
    const token = await crypto.generateToken({ key: id, expirationInMs: AccessToken.expirationInMs })
    return new AccessToken(token)
  }
  return new AuthenticationError()
}
