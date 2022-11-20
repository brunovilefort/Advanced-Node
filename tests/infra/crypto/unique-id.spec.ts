import { UniqueId } from '@/infra/crypto'

describe('UniqueId', () => {
  it('Should call UUID.v4', () => {
    const sut = new UniqueId(new Date(2022, 11, 20, 11, 22, 0))

    const uuid = sut.uuid({ key: 'any_key' })

    expect(uuid).toBe('any_key_202212202200000')
  })
})
