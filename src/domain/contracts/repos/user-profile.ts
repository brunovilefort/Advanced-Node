export interface SaveUserPicture {
  savePicture: (Input: SaveUserPicture.Input) => Promise<void>
}

export namespace SaveUserPicture {
  export type Input = { pictureUrl?: string }
}

export interface LoadUserProfile {
  load: (Input: LoadUserProfile.Input) => Promise<void>
}

export namespace LoadUserProfile {
  export type Input = { id: string }
}
