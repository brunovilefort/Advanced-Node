import { adaptExpressMiddleware as adapt } from '@/main/adapters'
import { makeAuthenticationMiddleware } from '../factories'

export const auth = adapt(makeAuthenticationMiddleware())
