import { MangaTitle } from '~~/types/ApiTypes';

export const useMangaInfoPage = () => {
  const route = useRoute()
  const { fetchMangaItem } = useFetchMangaItem()

  const mangaTitleId = computed(() => {
    if (Array.isArray(route.params.id)) {
      return route.params.id[0]
    }

    return route.params.id
  })

  const mangaTitle = ref<MangaTitle>()

  const { data, pending, error } = fetchMangaItem(mangaTitleId.value)

  watch(data, (val) => {
    if (val) {
      mangaTitle.value = val
    }
  })

  onUnmounted(() => {
    mangaTitle.value = undefined
  })

  return {
    mangaTitle,
    pending,
    error,
  }   
}
