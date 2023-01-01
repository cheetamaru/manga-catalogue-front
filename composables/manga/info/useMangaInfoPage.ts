import { mangaInfoDomain } from '~~/domains/mangaInfoDomain'

export const useMangaInfoPage = () => {
  const route = useRoute()
  const { t } = useI18n()

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
      : t('global.label.unknown')
  })

  const genres = computed(() => {
    return mangaTitle.value?.genres
      ? mangaInfoDomain.normalizeGenres(mangaTitle.value?.genres)
      : t('global.label.unknown')
  })

  return {
    mangaTitle,
    pending,
    error,
    authors,
    genres,
  }
}
