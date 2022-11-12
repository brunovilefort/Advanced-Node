import { FacebookApi } from '@/infra/apis'
import { HttpGetClient } from '@/infra/http'

import { mock, MockProxy } from 'jest-mock-extended'

describe('FacebookApi', () => {
  let httpClient: MockProxy<HttpGetClient>
  let sut: FacebookApi

  beforeAll(() => {
    httpClient = mock()
  })

  beforeEach(() => {
    sut = new FacebookApi(httpClient)
  })

  it('Should get app token', async () => {
    await sut.loadUser({ token: 'any_client_token' })

    expect(httpClient.get).toHaveBeenCalledWith({
      url: 'https://graph.facebook.com/oauth/access_token'
    })
  })
})
