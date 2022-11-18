import { forbidden, HttpResponse } from '@/application/helpers'
import { Authorize } from '@/domain/use-cases'
import { RequiredStringValidator } from '@/application/validations'

type HttpRequest = { authorization: string }

export class AuthenticationMiddleware {
  constructor (private readonly authorize: Authorize) {}

  async handle ({ authorization }: HttpRequest): Promise<HttpResponse<Error> | undefined> {
    const error = new RequiredStringValidator(authorization, 'authorization').validate()
    if (error !== undefined) return forbidden()
    try {
      await this.authorize({ token: authorization })
    } catch {
      return forbidden()
    }
  }
}
