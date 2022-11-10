import { AuthenticationError } from '@/domain/errors'
import { FacebookAuthenticationUseCase } from '@/domain/use-cases'

describe('FacebookAuthenticationUseCase', () => {
  it('Should call LoadFacebookUserApi with correct params', async (): Promise<void> => {
    const loadFacebookUserApi = {
      loadUser: jest.fn()
    }
    const sut = new FacebookAuthenticationUseCase(loadFacebookUserApi)

    await sut.perform({ token: 'any_token' })

    expect(loadFacebookUserApi.loadUser).toHaveBeenCalledWith({ token: 'any_token' })
    expect(loadFacebookUserApi.loadUser).toHaveBeenCalledTimes(1)
  })

  it('Should return AuthenticationError when LoadFacebookUserApi returns undefined', async (): Promise<void> => {
    const loadFacebookUserApi = {
      loadUser: jest.fn()
    }
    loadFacebookUserApi.loadUser.mockResolvedValueOnce(undefined)
    const sut = new FacebookAuthenticationUseCase(loadFacebookUserApi)

    const authResult = await sut.perform({ token: 'any_token' })

    expect(authResult).toEqual(new AuthenticationError())
  })
})
