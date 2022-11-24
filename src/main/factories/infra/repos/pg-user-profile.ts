import { PgUserProfileRepository } from '@/infra/postgres/repositories'

export const makePgUserProfileRepo = (): PgUserProfileRepository => {
  return new PgUserProfileRepository()
}
