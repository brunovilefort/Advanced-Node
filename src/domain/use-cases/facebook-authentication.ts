import { LoadFacebookUserApi } from '@/domain/contracts/apis'
import { FacebookAuthentication } from '@/domain/features'
import { AuthenticationError } from '@/domain/errors'
import { LoadUserAccountRepository, SaveFacebookAccountRepository } from '@/domain/contracts/repos'

export class FacebookAuthenticationUseCase {
  constructor (
    private readonly facebookApi: LoadFacebookUserApi,
    private readonly userAccountRepo: LoadUserAccountRepository & SaveFacebookAccountRepository
  ) {}

  async perform (params: FacebookAuthentication.Params): Promise<AuthenticationError> {
    const fbData = await this.facebookApi.loadUser(params)
    if (fbData !== undefined) {
      const accounData = await this.userAccountRepo.load({ email: fbData.email })
      await this.userAccountRepo.saveWithFacebook({
        id: accounData?.id,
        name: accounData?.name ?? fbData.name,
        email: fbData.email,
        facebookId: fbData.facebookId
      })
    }
    return new AuthenticationError()
  }
}
