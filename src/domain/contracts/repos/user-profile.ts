export interface SaveUserPicture {
  savePicture: (Input: SaveUserPicture.Input) => Promise<void>
}

export namespace SaveUserPicture {
  export type Input = { pictureUrl?: string, initials?: string }
}

export interface LoadUserProfile {
  load: (Input: LoadUserProfile.Input) => Promise<LoadUserProfile.Output>
}

export namespace LoadUserProfile {
  export type Input = { id: string }
  export type Output = { name?: string }
}
