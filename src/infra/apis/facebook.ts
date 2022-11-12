import { HttpGetClient } from '@/infra/http'
import { LoadFacebookUserApi } from '@/domain/contracts/apis'

export class FacebookApi {
  private readonly baseUrl = 'https://graph.facebook.com'

  constructor (private readonly httpClient: HttpGetClient) {}

  async loadUser (params: LoadFacebookUserApi.Params): Promise<void> {
    await this.httpClient.get({ url: `${this.baseUrl}/oauth/access_token` })
  }
}
