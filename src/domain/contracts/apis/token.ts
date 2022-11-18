export interface TokenGenerator {
  generateToken: (params: TokenGenerator.Params) => Promise<TokenGenerator.Result>
}

export namespace TokenGenerator {
  export type Params = {
    key: string
    expirationInMs: number
  }

  export type Result = string
}

export interface TokenValidador {
  validateToken: (params: TokenValidador.Params) => Promise<TokenValidador.Result>
}

export namespace TokenValidador {
  export type Params = { token: string }
  export type Result = string
}
