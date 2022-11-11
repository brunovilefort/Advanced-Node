import { LoadFacebookUserApi } from '@/domain/contracts/apis'
import { AuthenticationError } from '@/domain/errors'
import { FacebookAuthenticationUseCase } from '@/domain/use-cases'
import { SaveFacebookAccountRepository, LoadUserAccountRepository } from '@/domain/contracts/repos'

import { mock, MockProxy } from 'jest-mock-extended'

jest.mock('@/domain/models/facebook-account', () => ({ FacebookAccount: jest.fn().mockImplementation(() => ({ any: 'any' })) }))

describe('FacebookAuthenticationUseCase', () => {
  let sut: FacebookAuthenticationUseCase
  let facebookApi: MockProxy<LoadFacebookUserApi>
  let userAccountRepo: MockProxy<LoadUserAccountRepository & SaveFacebookAccountRepository>
  const token = 'any_token'

  beforeEach(() => {
    facebookApi = mock()
    facebookApi.loadUser.mockResolvedValueOnce({
      name: 'any_fb_name',
      email: 'any_fb_email',
      facebookId: 'any_fb_id'
    })
    userAccountRepo = mock()
    userAccountRepo.load.mockResolvedValue(undefined)
    sut = new FacebookAuthenticationUseCase(
      facebookApi,
      userAccountRepo
    )
  })

  it('Should call LoadFacebookUserApi with correct params', async (): Promise<void> => {
    await sut.perform({ token })

    expect(facebookApi.loadUser).toHaveBeenCalledWith({ token })
    expect(facebookApi.loadUser).toHaveBeenCalledTimes(1)
  })

  it('Should return AuthenticationError when LoadFacebookUserApi returns undefined', async (): Promise<void> => {
    facebookApi.loadUser.mockResolvedValueOnce(undefined)

    const authResult = await sut.perform({ token })

    expect(authResult).toEqual(new AuthenticationError())
  })

  it('Should call LoadUserAccountRepo when LoadFacebookUseiApi returns data', async (): Promise<void> => {
    await sut.perform({ token })

    expect(userAccountRepo.load).toHaveBeenCalledWith({ email: 'any_fb_email' })
    expect(userAccountRepo.load).toHaveBeenCalledTimes(1)
  })

  it('Should call SaveFacebookAccountRepository with FacebookAccount', async (): Promise<void> => {
    await sut.perform({ token })

    expect(userAccountRepo.saveWithFacebook).toHaveBeenCalledWith({ any: 'any' })
    expect(userAccountRepo.saveWithFacebook).toHaveBeenCalledTimes(1)
  })
})
