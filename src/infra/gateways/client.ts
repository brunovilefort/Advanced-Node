export interface HttpGetClient {
  get: <T = any> (Input: HttpGetClient.Input) => Promise<T>
}

export namespace HttpGetClient {
  export type Input = {
    url: string
    params: object
  }
}
