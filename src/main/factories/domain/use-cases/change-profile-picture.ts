import { makeAwsS3FileStorage, makePgUserProfileRepo, makeUniqueId } from '@/main/factories'
import { setupChangeProfilePicture, ChangeProfilePicture } from '@/domain/use-cases'

export const makeChangeProfilePicture = (): ChangeProfilePicture => {
  return setupChangeProfilePicture(
    makeAwsS3FileStorage(),
    makeUniqueId(),
    makePgUserProfileRepo()
  )
}
