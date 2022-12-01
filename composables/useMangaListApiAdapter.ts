import { useMangaListApi } from "@/services/useMangaListApi"

export const useMangaListApiAdapter = () => {
    const { mangaListApi } = useMangaListApi(useNuxtApp().$httpClient)

    const fetchList = () => {
        return mangaListApi.fetchList()
    }

    return {
        fetchList,
    }
}