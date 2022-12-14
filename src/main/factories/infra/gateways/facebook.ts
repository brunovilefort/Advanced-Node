import { makeAxiosHttpClient } from '@/main/factories'
import { env } from '@/main/config'
import { FacebookApi } from '@/infra/gateways'

export const makeFacebookApi = (): FacebookApi => {
  return new FacebookApi(
    makeAxiosHttpClient(),
    env.facebook.clientId,
    env.facebook.clientSecret
  )
}
