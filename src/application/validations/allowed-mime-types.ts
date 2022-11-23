import { InvalidMimeTypeError } from '@/application/errors'

type Extensions = 'png' | 'jpg'

export class AllowedMimeTypes {
  constructor (
    private readonly allowed: Extensions[],
    private readonly mimeType: string
  ) {}

  validate (): Error {
    return new InvalidMimeTypeError(this.allowed)
  }
}
