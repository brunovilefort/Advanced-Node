import { Validator } from '@/application/validations'

export class ValidationComposite {
  constructor (private readonly validators: Validator[]) {}

  validate (): undefined {
    return undefined
  }
}
