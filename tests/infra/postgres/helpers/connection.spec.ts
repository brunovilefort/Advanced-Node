import { PgConnection } from '@/infra/postgres/helpers'

import { createConnection, getConnectionManager } from 'typeorm'

jest.mock('typeorm', () => ({
  Entity: jest.fn(),
  PrimaryGeneratedColumn: jest.fn(),
  Column: jest.fn(),
  createConnection: jest.fn(),
  getConnectionManager: jest.fn()
}))

describe('PgConnection', () => {
  it('Should be a singleton', () => {
    const sut = PgConnection.getInstance()
    const sut2 = PgConnection.getInstance()

    expect(sut).toBe(sut2)
  })

  it('Should create a new connection', async () => {
    const getConnectionManagerSpy = jest.fn().mockReturnValueOnce({
      has: jest.fn().mockReturnValueOnce(false)
    })
    jest.mocked(getConnectionManager).mockImplementationOnce(getConnectionManagerSpy)
    const createQueryRunnerSpy = jest.fn()
    const createConnectionSpy = jest.fn().mockResolvedValueOnce({
      createQueryRunner: createQueryRunnerSpy
    })
    jest.mocked(createConnection).mockImplementationOnce(createConnectionSpy)
    const sut = PgConnection.getInstance()

    await sut.connect()

    expect(createConnectionSpy).toHaveBeenCalledWith()
    expect(createConnectionSpy).toHaveBeenCalledTimes(1)
    expect(createQueryRunnerSpy).toHaveBeenCalledWith()
    expect(createQueryRunnerSpy).toHaveBeenCalledTimes(1)
  })
})
