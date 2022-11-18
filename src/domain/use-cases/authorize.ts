import { TokenValidador } from '@/domain/contracts/apis'

type Setup = (crypto: TokenValidador) => Authorize
type Input = { token: string }
export type Authorize = (params: Input) => Promise<void>
export const setupAuthorize: Setup = crypto => async params => {
  await crypto.validateToken(params)
}
