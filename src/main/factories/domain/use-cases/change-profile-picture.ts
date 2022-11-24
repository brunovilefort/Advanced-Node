import { setupChangeProfilePicture, ChangeProfilePicture } from '@/domain/use-cases'
import { makeAwsS3FileStorage, makePgUserProfileRepo, makeUniqueId } from '@/main/factories'

export const makeChangeProfilePicture = (): ChangeProfilePicture => {
  return setupChangeProfilePicture(
    makeAwsS3FileStorage(),
    makeUniqueId(),
    makePgUserProfileRepo()
  )
}
