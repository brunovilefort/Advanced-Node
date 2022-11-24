import { SavePictureController } from '@/application/controllers'
import { makeChangeProfilePicture } from '@/main/factories'

export const makeSavePictureController = (): SavePictureController => {
  return new SavePictureController(makeChangeProfilePicture())
}
