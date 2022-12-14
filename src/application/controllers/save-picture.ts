import { Controller } from '@/application/controllers'
import { HttpResponse, success } from '@/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/application/validations'
import { ChangeProfilePicture } from '@/domain/use-cases'

type HttpRequest = { file?: { buffer: Buffer, mimeType: string }, userId: string }
type Model = { initials?: string, pictureUrl?: string }

export class SavePictureController extends Controller {
  constructor (private readonly changeProfilePicture: ChangeProfilePicture) {
    super()
  }

  override async perform ({ file, userId }: HttpRequest): Promise<HttpResponse<Model>> {
    const { initials, pictureUrl } = await this.changeProfilePicture({ id: userId, file })
    return success({ initials, pictureUrl })
  }

  override buildValidators ({ file }: any): Validator[] {
    if (file === undefined) return []
    return [
      ...Builder.of({ value: file, fieldName: 'file' }).required().image({ allowed: ['png', 'jpg'], maxSizeInMb: 5 }).build()
    ]
  }
}
