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
      ?.map((el) => `${el.firstName} ${el.surname}`).join(', ')
      || 'unknown'
  })

  const genres = computed(() => {
    return mangaTitle.value?.genres
      ?.map((el) => `${el.name}`).join(', ')
      || 'unknown'
  })

  return {
    mangaTitle,
    pending,
    error,
    authors,
    genres,
  }
}
