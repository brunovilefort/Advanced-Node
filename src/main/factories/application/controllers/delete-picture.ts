import { DeletePictureController } from '@/application/controllers'
import { makeChangeProfilePicture } from '@/main/factories'

export const makeDeletePictureController = (): DeletePictureController => {
  return new DeletePictureController(makeChangeProfilePicture())
}
