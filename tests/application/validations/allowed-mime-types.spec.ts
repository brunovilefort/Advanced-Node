import { InvalidMimeTypeError } from '@/application/errors'
import { AllowedMimeTypes } from '@/application/validations'

describe('AllowedMimeTypes', () => {
  it('Should return InvalidMimeTypeError if value is invalid', () => {
    const sut = new AllowedMimeTypes(['png'], 'image/jpg')

    const error = sut.validate()

    expect(error).toEqual(new InvalidMimeTypeError(['png']))
  })
})
