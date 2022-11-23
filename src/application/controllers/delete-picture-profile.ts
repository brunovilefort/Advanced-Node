import { ChangeProfilePicture } from '@/domain/use-cases'
import { HttpResponse, noContent } from '../helpers'

type HttpRequest = { userId: string }

export class DeletePictureController {
  constructor (private readonly changeProfilePicture: ChangeProfilePicture) {}

  async handle ({ userId }: HttpRequest): Promise<HttpResponse> {
    await this.changeProfilePicture({ id: userId })
    return noContent()
  }
}
