export const useFetchMangaItem = () => {
    const { fetchItem } = useMangaListApiAdapter()

    const fetchMangaItem = async (id: string) => {
        const response = await fetchItem(id)

        return { 
            ...response,
            data: response.data,
        }
    }
    
    return {
        fetchMangaItem,
    }
}