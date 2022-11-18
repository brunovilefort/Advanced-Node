import { TokenValidador } from '@/domain/contracts/apis'
import { setupAuthorize, Authorize } from '@/domain/use-cases'

import { mock, MockProxy } from 'jest-mock-extended'

jest.mock('@/domain/entities/facebook-account', () => ({ FacebookAccount: jest.fn().mockImplementation(() => ({ any: 'any' })) }))

describe('Authorize', () => {
  let crypto: MockProxy<TokenValidador>
  let sut: Authorize
  let token: string

  beforeAll(() => {
    token = 'any_token'
    crypto = mock()
    crypto.validateToken.mockResolvedValue('any_value')
  })

  beforeEach(() => {
    sut = setupAuthorize(crypto)
  })

  it('Should call TokenValidator with correct params', async (): Promise<void> => {
    await sut({ token })

    expect(crypto.validateToken).toHaveBeenCalledWith({ token })
    expect(crypto.validateToken).toHaveBeenCalledTimes(1)
  })

  it('Should return the correct accessToken', async (): Promise<void> => {
    const userId = await sut({ token })

    expect(userId).toBe('any_value')
    expect(crypto.validateToken).toHaveBeenCalledTimes(1)
  })
})
