export const useMangaListApiAdapter = () => {
    const mangaListApi  = useNuxtApp().$api.mangaApi

    const fetchList = async () => {
        const response = await mangaListApi.fetchList()

        return response.results
    }

    return {
        fetchList,
    }
}
