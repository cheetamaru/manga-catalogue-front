import { mangaInfoDomain } from '~~/domains/mangaInfoDomain'
import { MangaInfoDetailsItem } from '~~/types/Types'

export const useMangaInfoPage = () => {
  const route = useRoute()

  const { fetchMangaItem } = useFetchManga()

  const mangaTitleId = computed(() => {
    if (Array.isArray(route.params.id)) {
      return route.params.id[0]
    }

    return route.params.id
  })

  const { data: mangaTitle, pending, error } = fetchMangaItem(mangaTitleId.value)

  const authors = computed(() => {
    return mangaTitle.value?.authors
      ? mangaInfoDomain.normalizeAuthors(mangaTitle.value.authors)
      : 'unknown'
  })

  const genres = computed(() => {
    return mangaTitle.value?.genres
      ? mangaInfoDomain.normalizeGenres(mangaTitle.value?.genres)
      : 'unknown'
  })

  const createDetailsItem = (
    title: MangaInfoDetailsItem['title'],
    value?: MangaInfoDetailsItem['value'] | null) => {
    return {
      title,
      value: value ?? 'unknown',
    }
  }

  return {
    mangaTitle,
    pending,
    error,
    authors,
    genres,
    createDetailsItem,
  }
}
