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

  const normalizeInfoLabel = <T>(
    itemToNormalize: T | undefined,
    normalizer: (val: T) => string,
  ) => {
    return itemToNormalize
      ? normalizer(itemToNormalize)
      : t('global.label.unknown')
  }

  const authors = computed(() => {
    return normalizeInfoLabel(
      mangaTitle.value?.authors,
      mangaInfoDomain.normalizeAuthors,
    )
  })

  const genres = computed(() => {
    return normalizeInfoLabel(
      mangaTitle.value?.genres,
      mangaInfoDomain.normalizeGenres,
    )
  })

  return {
    mangaTitle,
    pending,
    error,
    authors,
    genres,
  }
}
