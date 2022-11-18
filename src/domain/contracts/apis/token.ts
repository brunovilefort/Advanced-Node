export interface TokenGenerator {
  generateToken: (params: TokenGenerator.Input) => Promise<TokenGenerator.Output>
}

export namespace TokenGenerator {
  export type Input = {
    key: string
    expirationInMs: number
  }

  export type Output = string
}

export interface TokenValidador {
  validateToken: (params: TokenValidador.Input) => Promise<TokenValidador.Output>
}

export namespace TokenValidador {
  export type Input = { token: string }
  export type Output = string
}
