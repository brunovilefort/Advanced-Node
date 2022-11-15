import { FacebookApi } from '@/infra/apis'
import { AxiosHttpClient } from '@/infra/http'
import { env } from '@/main/config/env'

describe('Facebook Api Integration Tests', () => {
  it('Should return a Facebook User if token is valid', async () => {
    const axiosClient = new AxiosHttpClient()
    const sut = new FacebookApi(
      axiosClient,
      env.facebookApi.clientId,
      env.facebookApi.clientSecret
    )

    const fbUser = await sut.loadUser({ token: 'EAAuXDgZBX4gABAHBHKI9FH0qnspzlTEufdPKpUr27XOgZB9bJ2GUtjxXFqK74dCfzEm9afaBiSvZCvLFPncFsjEZA9sYrZCnzDhxyS37927NDDZBee2eRDpLSth6ZCWGATorVd0HMo9QIbvBFitHZAQlRb1CaZCPIfu4xFusAgyDsSf4sfgX39sHZAJryO0BzpJM9DRmSI6834b3KcmBEpzapC' })

    expect(fbUser).toEqual({
      facebookId: '111238558470795',
      name: 'User Test',
      email: 'user_wrzqfzc_test@tfbnw.net'
    })
  })

  it('Should return undefined if token is invalid', async () => {
    const axiosClient = new AxiosHttpClient()
    const sut = new FacebookApi(
      axiosClient,
      env.facebookApi.clientId,
      env.facebookApi.clientSecret
    )

    const fbUser = await sut.loadUser({ token: 'invalid' })

    expect(fbUser).toBeUndefined()
  })
})
