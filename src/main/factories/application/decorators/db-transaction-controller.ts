import { makePgConnection } from '@/main/factories'
import { Controller } from '@/application/controllers'
import { DbTransactionController } from '@/application/decorators'

export const makePgTransactionController = (controller: Controller): DbTransactionController => {
  return new DbTransactionController(controller, makePgConnection())
}
