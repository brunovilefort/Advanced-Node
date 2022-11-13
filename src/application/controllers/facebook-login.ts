import { FacebookAuthentication } from '@/domain/features'

type HttpResponse = {
  statusCode: number
  data: any
}

export class FacebookLoginController {
  constructor (
    private readonly facebookAuthentication: FacebookAuthentication
  ) {}

  async handle (httpRequest: any): Promise<HttpResponse> {
    if (httpRequest.token === '' || httpRequest.token === undefined || httpRequest.token === null) {
      return {
        statusCode: 400,
        data: new Error('The field token is required')
      }
    }
    const result = await this.facebookAuthentication.perform({ token: httpRequest.token })
    return {
      statusCode: 401,
      data: result
    }
  }
}
