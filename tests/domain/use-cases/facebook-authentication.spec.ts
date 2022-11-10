import { LoadFacebookUserApi } from '@/domain/contracts/apis'
import { AuthenticationError } from '@/domain/errors'
import { FacebookAuthenticationUseCase } from '@/domain/use-cases'

import { mock, MockProxy } from 'jest-mock-extended'

describe('FacebookAuthenticationUseCase', () => {
  let sut: FacebookAuthenticationUseCase
  let loadFacebookUserApi: MockProxy<LoadFacebookUserApi>
  const token = 'any_token'

  beforeEach(() => {
    loadFacebookUserApi = mock()
    sut = new FacebookAuthenticationUseCase(loadFacebookUserApi)
  })

  it('Should call LoadFacebookUserApi with correct params', async (): Promise<void> => {
    await sut.perform({ token })

    expect(loadFacebookUserApi.loadUser).toHaveBeenCalledWith({ token })
    expect(loadFacebookUserApi.loadUser).toHaveBeenCalledTimes(1)
  })

  it('Should return AuthenticationError when LoadFacebookUserApi returns undefined', async (): Promise<void> => {
    loadFacebookUserApi.loadUser.mockResolvedValueOnce(undefined)

    const authResult = await sut.perform({ token })

    expect(authResult).toEqual(new AuthenticationError())
  })
})
