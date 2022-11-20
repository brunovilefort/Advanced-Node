import { UserProfile } from '@/domain/entities'

describe('UserProfile', () => {
  let sut: UserProfile

  beforeEach(() => {
    sut = new UserProfile('any_id')
  })
  it('Should create with empty initials when pictureUrl is provided', () => {
    sut.setPicture({ pictureUrl: 'any_url', name: 'any_name' })

    expect(sut).toEqual({ id: 'any_id', pictureUrl: 'any_url', initials: undefined })
  })

  it('Should create with empty initials when pictureUrl is provided', () => {
    sut.setPicture({ pictureUrl: 'any_url' })

    expect(sut).toEqual({ id: 'any_id', pictureUrl: 'any_url', initials: undefined })
  })

  it('Should create initials with first letter of first and last names', () => {
    sut.setPicture({ name: 'rodrigo da silva manguinho' })

    expect(sut).toEqual({ id: 'any_id', pictureUrl: undefined, initials: 'RM' })
  })

  it('Should create initials with first two letter of first name', () => {
    sut.setPicture({ name: 'rodrigo' })

    expect(sut).toEqual({ id: 'any_id', pictureUrl: undefined, initials: 'RO' })
  })

  it('Should create initials with first letter', () => {
    sut.setPicture({ name: 'r' })

    expect(sut).toEqual({ id: 'any_id', pictureUrl: undefined, initials: 'R' })
  })

  it('Should create with empty initials when name and pictureUrl are not provided', () => {
    sut.setPicture({})

    expect(sut).toEqual({ id: 'any_id', pictureUrl: undefined, initials: undefined })
  })

  it('Should create with empty initials when name and pictureUrl are not provided', () => {
    sut.setPicture({ name: '' })

    expect(sut).toEqual({ id: 'any_id', pictureUrl: undefined, initials: undefined })
  })
})
