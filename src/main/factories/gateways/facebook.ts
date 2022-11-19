import { env } from '@/main/config'
import { FacebookApi } from '@/infra/apis'
import { makeAxiosHttpClient } from '@/main/factories'

export const makeFacebookApi = (): FacebookApi => {
  return new FacebookApi(
    makeAxiosHttpClient(),
    env.facebook.clientId,
    env.facebook.clientSecret
  )
}
