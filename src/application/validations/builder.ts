import { RequiredString, Validator } from '@/application/validations'

export class ValidationBuilder {
  private constructor (
    private readonly value: string,
    private readonly fieldName: string,
    private readonly validators: Validator[] = []
  ) {}

  static of (Input: { value: string, fieldName: string }): ValidationBuilder {
    return new ValidationBuilder(Input.value, Input.fieldName)
  }

  required (): ValidationBuilder {
    this.validators.push(new RequiredString(this.value, this.fieldName))
    return this
  }

  build (): Validator[] {
    return this.validators
  }
}
