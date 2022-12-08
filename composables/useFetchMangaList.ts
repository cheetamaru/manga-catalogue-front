import { FetchListQuery } from "~~/types/test"

export const useFetchMangaList = () => {
    const { fetchList } = useMangaListApiAdapter()

    const fetchMangaList = async (query?: FetchListQuery) => {
        const response = await fetchList(query)

        return { 
            ...response,
            data: response.data?.results,
        }
    }
    
    return {
        fetchMangaList,
    }
}