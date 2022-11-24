import { auth } from '@/main/middlewares'
import { adaptExpressRoute as adapt } from '@/main/adapters'
import { makeSavePictureController } from '@/main/factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.delete('/users/picture', auth, adapt(makeSavePictureController()))
  router.put('/users/picture', auth)
}
