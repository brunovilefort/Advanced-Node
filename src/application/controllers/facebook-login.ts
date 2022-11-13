import { badRequest, HttpResponse, serverError, success, unauthorized } from '@/application/helpers'
import { RequiredFieldError } from '@/application/errors'
import { FacebookAuthentication } from '@/domain/features'
import { AccessToken } from '@/domain/models'

type HttpRequest = {
  token: string
}
type Model = Error | {
  accessToken: string
}

export class FacebookLoginController {
  constructor (
    private readonly facebookAuthentication: FacebookAuthentication
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const error = this.validate(httpRequest)
      if (error !== undefined) return badRequest(error)
      const accessToken = await this.facebookAuthentication.perform({ token: httpRequest.token })
      if (accessToken instanceof AccessToken) {
        return success({ accessToken: accessToken.value })
      } else {
        return unauthorized()
      }
    } catch (error) { return serverError(error) }
  }

  private validate (httpRequest: HttpRequest): Error | undefined {
    if (httpRequest.token === '' || httpRequest.token === undefined || httpRequest.token === null) {
      return new RequiredFieldError('token')
    }
  }
}
