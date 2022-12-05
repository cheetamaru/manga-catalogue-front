export const useMangaListApiAdapter = () => {
    const mangaListApi  = useNuxtApp().$api.mangaListApi

    const fetchList = () => {
        return mangaListApi.fetchList()
    }

    return {
        fetchList,
    }
}
