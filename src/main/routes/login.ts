import { adaptExpressRoute as adapt } from '@/main/adapters'
import { makeFacebookLoginController as facebookLogin } from '@/main/factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/api/login/facebook', adapt(facebookLogin()))
}
