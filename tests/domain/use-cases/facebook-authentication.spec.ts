import { LoadFacebookUserApi } from '@/domain/contracts/apis'
import { FacebookAuthenticationUseCase } from '@/domain/use-cases'

class LoadFacebookUserApiSpy implements LoadFacebookUserApi {
  token?: string

  async loadUser (params: LoadFacebookUserApi.Params): Promise<void> {
    this.token = params.token
  }
}

describe('FacebookAuthenticationUseCase', () => {
  it('Should call LoadFacebookUserApi with correct params', async (): Promise<void> => {
    const loadFacebookUserApi = new LoadFacebookUserApiSpy()
    const sut = new FacebookAuthenticationUseCase(loadFacebookUserApi)

    await sut.perform({ token: 'any_token' })

    expect(loadFacebookUserApi.token).toBe('any_token')
  })
})
