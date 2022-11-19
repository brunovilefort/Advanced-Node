export interface SaveUserPicture {
  savePicture: (Input: SaveUserPicture.Input) => Promise<void>
}

export namespace SaveUserPicture {
  export type Input = { pictureUrl?: string }
}
