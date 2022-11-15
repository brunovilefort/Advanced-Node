import { FacebookApi } from '@/infra/apis'
import { AxiosHttpClient } from '@/infra/http'
import { env } from '@/main/config/env'

describe('Facebook Api Integration Tests', () => {
  let axiosClient: AxiosHttpClient
  let sut: FacebookApi

  beforeEach(() => {
    axiosClient = new AxiosHttpClient()
    sut = new FacebookApi(
      axiosClient,
      env.facebookApi.clientId,
      env.facebookApi.clientSecret
    )
  })

  it('Should return a Facebook User if token is valid', async () => {
    const fbUser = await sut.loadUser({ token: env.facebookApi.facebookToken })

    expect(fbUser).toEqual({
      facebookId: '111238558470795',
      name: 'User Test',
      email: 'user_wrzqfzc_test@tfbnw.net'
    })
  })

  it('Should return undefined if token is invalid', async () => {
    const fbUser = await sut.loadUser({ token: 'invalid' })

    expect(fbUser).toBeUndefined()
  })
})
