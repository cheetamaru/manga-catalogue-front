export const useMangaInfoPage = () => {
  const route = useRoute()

  const { fetchMangaItem } = useFetchMangaItem()

  const mangaTitleId = computed(() => {
    if (Array.isArray(route.params.id)) {
      return route.params.id[0]
    }

    return route.params.id
  })

  const { data: mangaTitle, pending, error, refresh } = fetchMangaItem(mangaTitleId.value)

  return {
    mangaTitle,
    pending,
    error,
  }   
}
