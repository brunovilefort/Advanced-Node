import { Middleware } from '@/application/middlewares'

import { RequestHandler } from 'express'

type Adapt = (middleware: Middleware) => RequestHandler

export const adaptExpressMiddleware: Adapt = middleware => async (req, res, next) => {
  await middleware.handle({ ...req.headers })
}
