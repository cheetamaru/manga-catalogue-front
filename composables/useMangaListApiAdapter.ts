export const useMangaListApiAdapter = () => {
    const mangaListApi  = useNuxtApp().$api.mangaApi

    const fetchList = () => {
        return mangaListApi.fetchList()
    }

    return {
        fetchList,
    }
}
