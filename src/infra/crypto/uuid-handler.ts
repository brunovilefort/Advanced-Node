import { UUIDGenerator } from '@/domain/contracts/gateways'

import { v4 } from 'uuid'

export class UUIDHandler {
  uuid ({ key }: UUIDGenerator.Input): void {
    v4()
  }
}
