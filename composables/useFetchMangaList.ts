import { MangaListFetchQuery } from '~~/types/Types'
import { ComputedRef } from 'vue'

export const useFetchMangaList = () => {
  const { fetchList } = useMangaListApiAdapter()

  const fetchMangaList = (query?: ComputedRef<MangaListFetchQuery>) => {
    return fetchList(query)
  }
  
  return {
    fetchMangaList,
  }
}
