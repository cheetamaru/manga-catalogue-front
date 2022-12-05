export const useFetchMangaList = () => {
    const { fetchList } = useMangaListApiAdapter()

    const fetchMangaList = async () => {
        const { data, error, pending } = useAsyncData(() => fetchList())

        return { data: data.value?.results || [], error: error, pending: pending.value }
    }
    
    return {
        fetchMangaList,
    }
}