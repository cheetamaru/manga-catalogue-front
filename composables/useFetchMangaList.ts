import { FetchListQuery } from "~~/types/test"

export const useFetchMangaList = () => {
    const { fetchList } = useMangaListApiAdapter()

    const fetchMangaList = (query?: FetchListQuery) => {
        return fetchList(query)

        // return { 
        //     ...response,
        //     pending: response.pending,
        //     data: response.data,
        // }
    }
    
    return {
        fetchMangaList,
    }
}