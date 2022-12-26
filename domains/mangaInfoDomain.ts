import { Genre, MangaAuthor } from '~~/types/ApiTypes'

const normalizeAuthors = (authors: MangaAuthor[]) => authors.map((el) => `${el.firstName} ${el.surname}`).join(', ')

const normalizeGenres = (genres: Genre[]) => genres.map((el) => `${el.name}`).join(', ')

export const mangaInfoDomain = {
  normalizeAuthors,
  normalizeGenres,
}
