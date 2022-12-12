import { FetchListQuery } from "~~/types/test"
import { ComputedRef } from "vue"

export const useFetchMangaList = () => {
    const { fetchList } = useMangaListApiAdapter()

    const fetchMangaList = (query?: ComputedRef<FetchListQuery>) => {
        return fetchList(query)
    }
    
    return {
        fetchMangaList,
    }
}