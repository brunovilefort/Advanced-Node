import { LoadUserProfile, SaveUserPicture } from '@/domain/contracts/repos'
import { UploadFile, UUIDGenerator } from '@/domain/contracts/gateways'
import { setupChangeProfilePicture, ChangeProfilePicture } from '@/domain/use-cases'

import { mock, MockProxy } from 'jest-mock-extended'

describe('ChangeProfilePicture', () => {
  let uuid: string
  let crypto: MockProxy<UUIDGenerator>
  let file: Buffer
  let fileStorage: MockProxy<UploadFile>
  let userProfileRepo: MockProxy<SaveUserPicture & LoadUserProfile>
  let sut: ChangeProfilePicture

  beforeAll(() => {
    uuid = 'any_unique_id'
    crypto = mock()
    crypto.uuid.mockReturnValue(uuid)
    userProfileRepo = mock()
    file = Buffer.from('any_buffer')
    fileStorage = mock()
    fileStorage.upload.mockResolvedValue('any_url')
  })

  beforeEach(() => {
    sut = setupChangeProfilePicture(fileStorage, crypto, userProfileRepo)
  })

  it('Should call UploadFile with correct input', async () => {
    await sut({ id: 'any_id', file })

    expect(fileStorage.upload).toHaveBeenCalledWith({ file, key: uuid })
    expect(fileStorage.upload).toHaveBeenCalledTimes(1)
  })

  it('Should not call UploadFile when file is undefined', async () => {
    await sut({ id: 'any_id', file: undefined })

    expect(fileStorage.upload).not.toHaveBeenCalled()
  })

  it('Should call SaveUserPicture with correct input', async () => {
    await sut({ id: 'any_id', file })

    expect(userProfileRepo.savePicture).toHaveBeenCalledWith({ pictureUrl: 'any_url', initials: undefined })
    expect(userProfileRepo.savePicture).toHaveBeenCalledTimes(1)
  })

  it('Should call SaveUserPicture with correct input when file is undefined', async () => {
    await sut({ id: 'any_id', file: undefined })

    expect(userProfileRepo.savePicture).toHaveBeenCalledWith({ pictureUrl: undefined })
    expect(userProfileRepo.savePicture).toHaveBeenCalledTimes(1)
  })

  it('Should call LoadUserProfile with correct input', async () => {
    await sut({ id: 'any_id', file: undefined })

    expect(userProfileRepo.load).toHaveBeenCalledWith({ id: 'any_id' })
    expect(userProfileRepo.load).toHaveBeenCalledTimes(1)
  })
})
