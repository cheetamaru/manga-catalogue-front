
export const useFetchMangaList = () => {
    const { fetchList } = useMangaListApiAdapter()

    const fetchMangaList = () => {
        return fetchList()
    }
    
    return {
        fetchMangaList,
    }
}