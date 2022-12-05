export const useMangaListApiAdapter = () => {
    const mangaListApi  = useNuxtApp().$api.mangaListApi

    const fetchList = async () => {
        const response = await mangaListApi.fetchList()

        return response.results
    }

    return {
        fetchList,
    }
}
