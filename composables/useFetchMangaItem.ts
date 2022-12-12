export const useFetchMangaItem = () => {
    const { fetchItem } = useMangaListApiAdapter()

    const fetchMangaItem = (id: string) => {
        return fetchItem(id)

        // return { 
        //     ...response,
        //     data: response.data,
        // }
    }
    
    return {
        fetchMangaItem,
    }
}