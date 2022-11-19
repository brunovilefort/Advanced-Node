import { HttpGetClient } from '@/infra/http'

import axios from 'axios'

export class AxiosHttpClient implements HttpGetClient {
  async get ({ url, params }: HttpGetClient.Input): Promise<any> {
    const Output = await axios.get(url, { params })
    return Output.data
  }
}
