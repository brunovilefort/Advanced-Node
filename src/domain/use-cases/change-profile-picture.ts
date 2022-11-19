import { UploadFile } from '@/domain/contracts/gateways'

type Setup = (fileStorage: UploadFile) => ChangeProfilePicture
type Input = { id: string, file: Buffer }
export type ChangeProfilePicture = (input: Input) => Promise<void>

export const setupChangeProfilePicture: Setup = fileStorage => async ({ id, file }) => {
  await fileStorage.upload({ file, key: 'any_id' })
}
