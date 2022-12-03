import { useMangaListApi } from "@/services/useMangaListApi"

export const useMangaListApiAdapter = () => {
    const mangaListApi  = useNuxtApp().$httpClient.mangaApi

    const fetchList = () => {
        return mangaListApi.fetchList()
    }

    return {
        fetchList,
    }
}
