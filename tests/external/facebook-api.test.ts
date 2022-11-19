import { Facebook } from '@/infra/gateways'
import { AxiosHttpClient } from '@/infra/http'
import { env } from '@/main/config/env'

describe('Facebook Api Integration Tests', () => {
  let axiosClient: AxiosHttpClient
  let sut: Facebook

  beforeEach(() => {
    axiosClient = new AxiosHttpClient()
    sut = new Facebook(
      axiosClient,
      env.facebook.clientId,
      env.facebook.clientSecret
    )
  })

  it('Should return a Facebook User if token is valid', async () => {
    const fbUser = await sut.loadUser({ token: env.facebook.facebookToken })

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
