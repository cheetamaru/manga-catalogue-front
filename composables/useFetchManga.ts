import { MangaListFetchQuery } from '~~/types/Types'
import { ComputedRef } from 'vue'

export const useFetchManga = () => {
  const { fetchItem, fetchList } = useMangaListApiAdapter()

  const fetchMangaItem = (id: string) => {
    return fetchItem(id, {
      lazy: true,
    })
  }

  const fetchMangaList = (query: ComputedRef<MangaListFetchQuery>) => {
    return fetchList(query, {
      lazy: true,
      watch: [query || {}],
    })
  }
  
  return {
    fetchMangaItem,
    fetchMangaList,
  }
}
