import { ExpressRouter } from '@/main/adapters'
import { Controller } from '@/application/controllers'

import { getMockReq, getMockRes } from '@jest-mock/express'
import { mock } from 'jest-mock-extended'

describe('ExpressRouter', () => {
  it('Should call handle with correct request', async () => {
    const req = getMockReq({ body: { any: 'any' } })
    const { res } = getMockRes()
    const controller = mock<Controller>()
    const sut = new ExpressRouter(controller)

    await sut.adapt(req, res)

    expect(controller.handle).toHaveBeenCalledWith({ any: 'any' })
  })
})
