import { auth } from '@/main/middlewares'
import { adaptExpressRoute as adapt, adaptMulter as multer } from '@/main/adapters'
import { makeSavePictureController } from '@/main/factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.delete('/users/picture', auth, adapt(makeSavePictureController()))
  router.put('/users/picture', auth, multer, adapt(makeSavePictureController()))
}
