import { PgConnection } from '@/infra/postgres/helpers'

describe('PgConnection', () => {
  it('Should be a singleton', () => {
    const sut = PgConnection.getInstance()
    const sut2 = PgConnection.getInstance()

    expect(sut).toBe(sut2)
  })
})
