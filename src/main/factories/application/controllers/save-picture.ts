import { makeChangeProfilePicture, makePgTransactionController } from '@/main/factories'
import { SavePictureController, Controller } from '@/application/controllers'

export const makeSavePictureController = (): Controller => {
  const controller = new SavePictureController(makeChangeProfilePicture())
  return makePgTransactionController(controller)
}
