import { RequiredFieldError } from '@/application/errors'
import { Validator } from '@/application/validations'

export class Required implements Validator {
  constructor (
    readonly value: any,
    readonly fieldName?: string
  ) {}

  validate (): Error | undefined {
    if (this.value === undefined || this.value === null) {
      return new RequiredFieldError(this.fieldName)
    }
  }
}

export class RequiredString extends Required {
  constructor (
    override readonly value: string,
    override readonly fieldName?: string
  ) {
    super(value, fieldName)
  }

  validate (): Error | undefined {
    if (super.validate() !== undefined || this.value === '') {
      return new RequiredFieldError(this.fieldName)
    }
  }
}

export class RequiredBuffer extends Required {
  constructor (
    override readonly value: Buffer,
    override readonly fieldName?: string
  ) {
    super(value, fieldName)
  }

  validate (): Error | undefined {
    if (super.validate() !== undefined || this.value.length === 0) {
      return new RequiredFieldError(this.fieldName)
    }
  }
}
