import { UniqueId } from '@/infra/gateways'

import { set, reset } from 'mockdate'

describe('UniqueId', () => {
  let sut: UniqueId

  beforeAll(() => {
    set(new Date(2022, 11, 20, 11, 22, 0))
    sut = new UniqueId()
  })

  afterAll(() => {
    reset()
  })

  it('Should create a unique id', () => {
    const uuid = sut.uuid({ key: 'any_key' })

    expect(uuid).toBe('any_key_202212202200000')
  })
})
